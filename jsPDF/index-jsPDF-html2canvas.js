const {
    jsPDF
} = require("jspdf"); // will automatically load the node version
const doc = new jsPDF();

const fs = require('fs')
// let html_to_convert  = fs.readFileSync(`./a4.html`);
let html_to_convert  = fs.readFileSync(`./a4-without-css.html`);
// let html_to_convert  = ``;

doc.html(html_to_convert, {
    callback: function (document) {
        console.log(`success`);
        // fs.writeFileSync(`${Config.temp_folder}/a4.html`, html_to_convert);
        document.save();
        //doc.save(`${Config.temp_folder}/a4.pdf`);
        return buffer;
    }, jsPDF
});

createPDF()

//create pdf
function createPDF() {
    getCanvas().then(function (canvas) {
        var
            img = canvas.toDataURL("image/png"),
            doc = new jsPDF({
                unit: 'px',
                format: 'a4'
            });
        doc.addImage(img, 'JPEG', 20, 20);
        doc.save("{{this.['Student Last Name']}}-{{this.['Student Name']}}-umpire-incident-report.pdf");
        content.width(cache_width);
    });
}

// create canvas object
function getCanvas() {
    content.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
    return html2canvas(content, {
        imageTimeout: 2000,
        removeContainer: true
    });
}
