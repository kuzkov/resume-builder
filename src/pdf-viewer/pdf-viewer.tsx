import { pdf } from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import { useAsync } from "react-use";
import { pdfjs } from "react-pdf";
import url from "pdfjs-dist/build/pdf.worker.js";
import { SyntheticEvent, useState } from "react";
import "./pdf-viewer.less";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { StandardTemplate } from "../templates/standard-template";
import { Pagination, PaginationProps } from "antd";

pdfjs.GlobalWorkerOptions.workerSrc = url;

type PdfViewerProps = {};

export function PdfViewer(props: PdfViewerProps) {
  const value = <StandardTemplate />;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const render = useAsync(async () => {
    if (!value) return;

    const blob = await pdf(value).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, []);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const openLinkInNewTab = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;

    if (target.tagName.toLowerCase() === "a") {
      window.open(target.href, "_blank");
    }
  };

  const handlePageChange: PaginationProps["onChange"] = (page) => {
    setPageNumber(page);
  };

  return (
    <div className="rb-wrapper">
      <div className="rb-viewer">
        <div className="rb-viewer__document-wrapper" onClick={openLinkInNewTab}>
          {render.value && (
            <Document file={render.value} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                width={2000}
                onGetAnnotationsSuccess={(annotations) => {
                  console.log(annotations);
                }}
                renderTextLayer={false}
                pageNumber={pageNumber}
              />
            </Document>
          )}
        </div>
      </div>
      <div className="rb-viewer__bottom-bar">
        <Pagination
          current={pageNumber}
          defaultCurrent={1}
          total={numPages ?? 1}
          pageSize={1}
          hideOnSinglePage
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
