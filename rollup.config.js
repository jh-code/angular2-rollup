import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import sass from 'node-sass';

export default {
    entry: 'app/main.aot.ts',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        angular({
            preprocessors: {
                style: scss => {
                    return sass.renderSync({ data: scss }).css;
                }
            }
        }),
        typescript({ typescript: require('typescript') }),
        nodeResolve({ jsnext: true, module: true }),
        commonjs({ include: 'node_modules/rxjs/**' })
    ]
};
