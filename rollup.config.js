import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import sass from 'node-sass';

export default {
    entry: 'build/app/main.aot.js',
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
