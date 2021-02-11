const {
    jsPDF
} = require("jspdf"); // will automatically load the node version

const generateData = function (amount) {
    let result = [];
    let data = {
        coin: "100",
        game_group: "GameGroup",
        game_name: "XPTO2",
        game_version: "25",
        machine: "20485861",
        vlt: "0"
    };
    for (let i = 0; i < amount; i += 1) {
        data.id = (i + 1).toString();
        result.push(Object.assign({}, data));
    }
    return result;
};

function createHeaders(keys) {
    let result = [];
    for (let i = 0; i < keys.length; i += 1) {
        result.push({
            id: keys[i],
            name: keys[i],
            prompt: keys[i],
            width: 65,
            align: "center",
            padding: 0
        });
    }
    return result;
}

const headers = createHeaders([
    "id",
    "coin",
    "game_group",
    "game_name",
    "game_version",
    "machine",
    "vlt"
]);

const doc = new jsPDF({
    putOnlyUsedFonts: true,
    orientation: "landscape"
});

for (let j = 0; j < 10; j++) {
    doc.table(1, 1, generateData(100), headers, {
        autoSize: true,
        config: {
            margins:10,
            padding:15
        }
    });
    doc.setTextColor('#000FF').text("Hello world! " + j, 1 * 100 + 25, j * 100 + 25);
    doc.cellAddPage();
    doc.setTextColor('#00000')
}

doc.save("a4.pdf"); // will save the file in the current working directory
