import { pdf, PDFDownloadLink } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';
import { useDebounce } from 'react-use';
import { pdfjs } from 'react-pdf';
import url from 'pdfjs-dist/build/pdf.worker.js';
import { type SyntheticEvent, useState } from 'react';
import './pdf-viewer.less';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { StandardTemplate } from '../templates/standard-template';
import { Button, Pagination, type PaginationProps } from 'antd';
import { useResume } from '../resume-form';
import { DownloadOutlined } from '@ant-design/icons';

pdfjs.GlobalWorkerOptions.workerSrc = url;

type PdfViewerProps = Record<string, unknown>;

export function PdfViewer(props: PdfViewerProps) {
  const resume = useResume();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [url, setUrl] = useState<string>();

  useDebounce(
    async () => {
      const blob = await pdf(<StandardTemplate data={resume} />).toBlob();
      const url = URL.createObjectURL(blob);
      setUrl(url);
    },
    2000,
    [resume],
  );

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const openLinkInNewTab = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;

    if (target.tagName.toLowerCase() === 'a') {
      window.open(target.href, '_blank');
    }
  };

  const handlePageChange: PaginationProps['onChange'] = (page) => {
    setPageNumber(page);
  };

  return (
    <div className='rb-wrapper'>
      <div className='rb-viewer'>
        <div className='rb-viewer__document-wrapper' onClick={openLinkInNewTab}>
          {url && (
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
              <Page width={2000} renderTextLayer={false} pageNumber={pageNumber} />
            </Document>
          )}
        </div>
      </div>
      <div className='rb-viewer__top-bar'>
        <Pagination
          hideOnSinglePage
          current={pageNumber}
          defaultCurrent={1}
          total={numPages ?? 1}
          pageSize={1}
          onChange={handlePageChange}
        />
      </div>
      <div className='rb-viewer__bottom-bar'>
        <PDFDownloadLink document={<StandardTemplate data={resume} />} fileName='resume.pdf'>
          {({ loading, error }) => (
            <Button loading={loading} disabled={Boolean(error)} type='primary' size='large'>
              Download PDF
              <DownloadOutlined />
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
