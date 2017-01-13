import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
    entry: 'app/main.ts',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        angular(),
        postcss({
            extensions: [ '.css' ],
            plugins: [ cssnano() ]
        }),
        typescript({ typescript: require('typescript') }),
        nodeResolve({ jsnext: true, module: true }),
        commonjs({ include: 'node_modules/rxjs/**' })
    ]
};
