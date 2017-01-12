import nodeResolve from 'rollup-plugin-node-resolve';
import angular from 'rollup-plugin-angular';

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
    entry: 'build/app/main.aot.js',
    dest: 'dist/bundle.es2015.js',
    sourceMap: true,
    treeshake: true,
    moduleName: 'main',
    plugins: [
        angular(),
        rollupNG2(),
        nodeResolve({
            jsnext: true, main: true, module: true
        })
    ]
};
