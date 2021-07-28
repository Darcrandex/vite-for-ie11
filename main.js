import "./style.css";

const apis = ["Proxy", "Reflect", "Promise", "Set", "Map"];

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>

  <ol>${apis
    .map((v) => `<li>${v}: ${Boolean(window[v]) ? "yes" : "no"}</li>`)
    .join("")}</ol>
`;
