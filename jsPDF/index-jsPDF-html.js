const {
    jsPDF
} = require("jspdf"); // will automatically load the node version
const doc = new jsPDF();

const fs = require('fs')
// let html_to_convert  = fs.readFileSync(`../html/a4.html`);
// let html_to_convert  = fs.readFileSync(`../html/a4-without-css.html`);
// let html_to_convert  = fs.readFileSync(`../html/simple-html.html`);
let html_to_convert = `<body>
    <p> HELLO WORLD</p>
</body>`;

doc.html(html_to_convert, {
    callback: function (document) {
        console.log(`success`);
        // fs.writeFileSync(`${Config.temp_folder}/a4.html`, html_to_convert);
        document.save();
        //doc.save(`${Config.temp_folder}/a4.pdf`);
        return buffer;
    },
    x: 10,
    y: 10,
    html2canvas: 
});