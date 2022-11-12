import {
  pdf,
  Text,
  Document as PdfDocument,
  Page as PdfPage,
  Link,
} from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import { useAsync } from "react-use";
import { pdfjs } from "react-pdf";
import url from "pdfjs-dist/build/pdf.worker.js";
import { SyntheticEvent, useState } from "react";
import "./pdf-viewer.less";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = url;

const document = (
  <PdfDocument>
    <PdfPage size="A4">
      <Text>
        hellol{" "}
        <Link src="https://www.google.com">
          <Text>Section #1 helol</Text>
        </Link>
      </Text>
    </PdfPage>
  </PdfDocument>
);

type PdfViewerProps = {};

export function PdfViewer(props: PdfViewerProps) {
  const value = document;
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

  return (
    <div className="viewer">
      <div className="viewer__document-wrapper" onClick={openLinkInNewTab}>
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
  );
}
