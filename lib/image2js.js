const fs = require('fs');
const path = require('path');

module.exports = function (input, output) {
    const fs = require('fs');
    const files = fs.readdirSync(input);
    const ms = files.map(filename => {
        const name = filename.split('.')[0];
        return name.replace(/([-_].{1})/g, value => value[1].toUpperCase());
    })

    const template = `${files.map((filename, index) => 'import ' + ms[index] + ' from \'' + path.join(input, filename) + '\'').join(';\n')}
export {
    ${ms}
}
`
    fs.writeFileSync(path.join(output, './image.js'), template);
}