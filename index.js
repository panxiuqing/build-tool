#!/usr/bin/env node
const yargs = require('yargs');
const image2sprites = require('./lib/image2sprites');

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
.help()
.argv