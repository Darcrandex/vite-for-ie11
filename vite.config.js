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
