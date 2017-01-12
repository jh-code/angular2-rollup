import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';

export default {
    entry: 'app/main.ts',
    dest: 'dist/bundle.js',
    format: 'iife',
    plugins: [
        angular(),
        postcss({
            extensions: [ '.css' ]
        }),
        typescript({ typescript: require('typescript') }),
        nodeResolve({ jsnext: true, module: true }),
        commonjs({ include: 'node_modules/rxjs/**' }),
        serve({
            contentBase: '',
            historyApiFallback: true,
            host: 'localhost',
            port: 4200
        }),
        livereload({
            watch: 'app',
            verbose: true,
            exts: [ 'ts', 'html', 'css', 'js', 'png', 'svg', 'gif', 'jpg' ]
        })
    ]
};
