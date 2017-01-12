Angular2 Rollup Starter
=========

This starter app was based on this blog article, which is an awesome guide to bundling Angular2 apps as small as possible. I needed a development setup alongside this, so I made this project.

Install
-----

Clone the repository and run `yarn` in the project.

Development
-----

Just run `npm start` and your app will be bundled and served in the browser with lite-server.

Production
-----

It is currently working, but you have to do something first to "serve" the bundle in the browser. Run `npm run build` and rename the file `bs-config.js` to something else, then run `lite-server`. This is temporary.

Running `npm run build` will bundle the application into the `dist` directory as `bundle.min.js`.

Other Info
-----

Currently it doesn't bundle styles or even templates. This is a work in progress.