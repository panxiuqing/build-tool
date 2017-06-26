#!/usr/bin/env node
const {spawn} = require('child_process');
const yargs = require('yargs');
const image2sprites = require('./lib/image2sprites');
const image2js = require('./lib/image2js');
const image2css = require('./lib/image2css');

yargs.usage(
    '$0 <cmd> [...args]'
)
    .command(
    'sprites [input] [output]',
    'generate style file and sprites image from images',
    {
        input: {
            default: './image',
        },
        output: {
            default: './dist'
        }
    },
    argv => {
        image2sprites(argv.input, argv.output);
    }
    )
    .command(
    'img2js [input] [output]',
    'generate es2015 module for [input]/*.png',
    {
        input: {
            default: './image',
        },
        output: {
            default: './dist'
        }
    },
    argv => {
        image2js(argv.input, argv.output);
    }
    )
    .command(
    'compressPNG',
    'compress *.png',
    {
    },
    argv => {
        spawn('pngquant.cmd', ['*.png', '--ext', '.png', '--force'], {
            cwd: './'
        });
    }
    )
    .help()
    .argv

module.exports = {
    image2js,
    image2css,
    image2sprites
}