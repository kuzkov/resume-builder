import {
  pdf,
  Text,
  Document as PdfDocument,
  Page as PdfPage,
  View,
} from "@react-pdf/renderer";
import { Document, Page } from "react-pdf";
import { useAsync } from "react-use";
import { pdfjs } from "react-pdf";
import url from "pdfjs-dist/build/pdf.worker.js";

pdfjs.GlobalWorkerOptions.workerSrc = url;

const MyDocument = () => (
  <PdfDocument>
    <PdfPage size="A4">
      <View>
        <Text>Section #1</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </PdfPage>
  </PdfDocument>
);

export function PdfViewer() {
  const value = MyDocument();

  const render = useAsync(async () => {
    if (!value) return;

    const blob = await pdf(value).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, []);

  console.log(render.value);

  return (
    <div>
      {render.value && (
        <Document file={render.value}>
          <Page pageIndex={1} pageNumber={1} />
        </Document>
      )}
    </div>
  );
}
