#!/usr/bin/env node
const yargs = require('yargs');
const image2sprites = require('./lib/image2sprites');

argv = yargs.command(
    'sprites <dir> [output]',
    'generate style file and sprites image from images',
    argv => {
    }
)
.help()
.argv

image2sprites(argv.dir);