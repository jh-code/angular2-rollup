import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'app/main.aot.ts',
    dest: 'dist/bundle.js',
    format: 'iife',
    treeshake: true,
    plugins: [
        angular(),
        typescript({ typescript: require('typescript') }),
        nodeResolve({ jsnext: true, module: true }),
        commonjs({ include: 'node_modules/rxjs/**' }),
        uglify()
    ]
};
