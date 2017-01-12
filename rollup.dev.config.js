import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

class RollupNG2 {
    resolveId(id, from) {
        if (id.startsWith('rxjs/')) {
            return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
        }
        return undefined;
    }
}

const rollupNG2 = () => new RollupNG2();

export default {
    entry: 'dist/main.js',
    dest: 'dist/bundle.es2015.js',
    sourceMap: true,
    treeshake: true,
    moduleName: 'main',
    plugins: [
        postcss({
            plugins: [
                simplevars(),
                nested(),
                cssnext({ warnForDuplicates: false, }),
                cssnano(),
            ],
            extensions: ['.css'],
        }),
        rollupNG2(),
        nodeResolve({
            jsnext: true, main: true, module: true
        }),
        serve(),
        livereload('app')
    ]
};


