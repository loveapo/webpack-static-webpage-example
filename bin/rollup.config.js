import pkg from '../package.json';
import {uglify} from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript';
import tsConfig from './tsconfig.json';

const INPUT = 'src/main.ts';
const OUTPUT_FORMAT = 'umd';
const OUTPUT_NAME = 'ElementPosition';

export default [{
    input: INPUT,
    output: {
        file: pkg.main,
        format: OUTPUT_FORMAT,
        name: OUTPUT_NAME
    },
    plugins: [
        uglify(),
        typescript(tsConfig)
    ]
}, {
    input: INPUT,
    output: {
        file: pkg.main.replace(/\.min/, ''),
        format: OUTPUT_FORMAT,
        name: OUTPUT_NAME
    },
    plugins: [typescript(tsConfig)]
}];