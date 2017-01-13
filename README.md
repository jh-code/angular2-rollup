Angular2 Rollup Starter
=========

This starter app was based on [this blog article](http://blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/), which is an awesome guide to bundling Angular2 apps as small as possible.
I needed a development setup alongside this, so I made this project.

Install
-----

Clone the repository and run `yarn` in the project.

Development
-----

Just run `npm start` and your app will be bundled and served in the browser with lite-server.

Production
-----

Running `npm run build` will bundle the application into the `dist` directory as `bundle.js`.
Run `npm run serve` to serve the minified bundle in the browser.

Other Info
-----

Currently the only thing I need to add is getting rollup watch to trigger a rebuild when component stylesheets or templates are changed.