export default function PdfViewer({ pdfUrl = "" }) {
  const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
    pdfUrl
  )}&embedded=true`;

  return (
    <div style={{ height: "95%", width: "100%" }}>
      <iframe
        src={googleViewerUrl}
        style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
