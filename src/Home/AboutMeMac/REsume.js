import { Document, Page } from "react-pdf";

export function PDFViewer() {
  const pdfURL = 'src\\home\\AboutMeMac\\Resume.pdf';
  return (
    <div>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
