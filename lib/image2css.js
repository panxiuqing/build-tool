const fs = require('fs');
const path = require('path');

module.exports = function (input, output) {
    const files = fs.readdirSync(input);
    const classes = files.map(filename => {
        const name = filename.split('.')[0];
        return '.icon-' + name;
    });

    const template = `${files.map((filename, index) => classes[index] + ' {background: url(./image/' + filename + ') no-repeat 0 0;}').join('\n')}`;

    fs.writeFileSync(path.join(output, './sprites.css'), template);
}