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
import styled from "@emotion/styled";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { Box, darken, useTheme } from "@mui/material";
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

const StyledViwer = styled.div``;

const StyledDocumentWrapper = styled.div`
  max-width: 450px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .react-pdf__Document {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);

    .react-pdf__Page {
      &__annotations {
        width: 100% !important;
        height: 100% !important;
      }

      &__canvas {
        width: 100% !important;
        height: auto !important;
      }
    }
  }
`;

type PdfViewerProps = {};

export function PdfViewer(props: PdfViewerProps) {
  const theme = useTheme();
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
    <Box
      sx={{
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "auto",
        padding: "2rem 3rem",
        alignItems: "center",
        bgcolor: theme.palette.grey[300],
        flexDirection: "column",
      }}
    >
      <StyledDocumentWrapper onClick={openLinkInNewTab}>
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
      </StyledDocumentWrapper>
    </Box>
  );
}
