const fs = require('fs');
const postcss = require('postcss');
const sprites = require('postcss-sprites');
const path = require('path');

module.exports = function (dir, output = './dist') {
    let images = fs.readdirSync(dir);
    let classNames = images.map(image => `.icon-${image.split('.')[0]}`);

    let css = `
        ${classNames.map((classname, index) => classname + ' {background: url(../' + path.join(dir, images[index]) + ') no-repeat 0 0;}')}
    `
    fs.writeFileSync('./tmp/style.css', css);
    console.log(css)
    let opts = {
        stylesheetPath: output,
        spritePath: path.join(output, '/images/')
    };
    let toCssPath = path.join(output, '/style.css');

    postcss([sprites(opts)])
        .process(css, {
            from: './tmp/style.css',
            to: toCssPath
        })
        .then(function (result) {
            fs.writeFileSync(toCssPath, result.css);
        });
    fs.
}