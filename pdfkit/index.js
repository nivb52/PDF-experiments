async function tryPDFkitWithHTML() {
  const PDFDocument = require('pdfkit')
  const doc = new PDFDocument;
  // const data_json = require('./ chunk_data.json ');
  const data_html_path = '../html/simple-html.html';
  const fs = require('fs')
  try {
    let file_readed = fs.readFileSync(data_html_path)
    let html_to_convert = `<body>
    <p> HELLO WORLD</p>
</body>`;
    doc.pipe(fs.createWriteStream('./output.pdf')); // write to PDF
    doc.pipe(html_to_convert);
    console.log('printed');
    doc.end();

  } catch (e) {
    console.error(e);
  }
};

tryPDFkitWithHTML();