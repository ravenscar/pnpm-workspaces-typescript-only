# Minimal pnpm workspace setup with TypeScript, ESLint, and esbuild.

This setup contains a shared module and an app module. The app module is able to import from the shared module. There is only a single TypeScript and a single ESLint config for all packages.

* The typescript code is not transpiled to JS, the `index.ts` is export in the `main` field of the `package.json`. 
* There is a `noemit` script which can be used for checking the types, and a `lint` script which can be used to run eslint.
* Esbuild is used to create the final bundle.
