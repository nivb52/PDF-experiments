const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();

(async () => {
    try {
        merger.add('./pdfs/1.pdf'); //merge all pages. parameter is the path to file and filename.
        merger.add('./pdfs/2.pdf');
        merger.add('./pdfs/3.pdf');
        merger.add('./pdfs/4.pdf');
        merger.add('./pdfs/5.pdf');
        merger.add('./pdfs/6.pdf');
        merger.add('./pdfs/7.pdf');
        merger.add('./pdfs/8.pdf');
        merger.add('./pdfs/9.pdf');
        merger.add('./pdfs/10.pdf');
        merger.add('./pdfs/11.pdf');
        merger.add('./pdfs/12.pdf');
        merger.add('./pdfs/13.pdf');

        await merger.save('merged.pdf'); //save under given name

    } catch (e) {
        console.error(e);
    }
})();