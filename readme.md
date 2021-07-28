1. create a project with vanilla

```sh
yarn create vite vite-for-ie11 --template vanilla
```

2. install plugin `@vitejs/plugin-legacy`

```sh
yarn add @vitejs/plugin-legacy -D
```

3. create config file and set configs

I just follow the [tutorial](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#usage)

```sh
touch vite.config.js
```

```js
// vite.config.js

import legacy from "@vitejs/plugin-legacy";

export default {
  plugins: [
    legacy({
      // for ie11
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
};
```

4. add the test code

> read the `./index.html` for detail.

```js
const apis = ["Proxy", "Reflect", "Promise", "Set", "Map"];

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>

  <ol>${apis
    .map((v) => `<li>${v}: ${Boolean(window[v]) ? "yes" : "no"}</li>`)
    .join("")}</ol>
`;
```

Then I run `yarn serve`, I got a error msg: `Unhandled promise rejection TypeError: Target is not iterable`
