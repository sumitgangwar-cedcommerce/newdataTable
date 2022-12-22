import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import images from "rollup-plugin-image-files";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import smartAsset from "rollup-plugin-smart-asset";
import pkg from "./package.json";
import json from '@rollup/plugin-json';

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: `dist/index.js`,
        format: "es",
      },
      {
        file: `dist/index.modern.js`,
        format: "cjs",
      },
    ],
    external: [
      "react",
      "react-proptypes",
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      json(),
      peerDepsExternal(),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      resolve({
        browser: true,
      }),
      commonjs({
        include: ["node_modules/**"],
        namedExports: {
          "node_modules/react/react.js": [
            "Children",
            "Component",
            "PropTypes",
            "createElement",
          ],
          "node_modules/react-dom/index.js": ["render"],
          "react-dom": ["createPortal"],
        },
      }),
      babel({
        exclude: "node_modules/**",
      }),
      postcss({
        plugins: [autoprefixer()].filter(Boolean),
        // set it to false, by default it true
        autoModules: false,
        // used to modify the name of CSS Class
        // value [name]_[local]_[hash]
        modules: {
          generateScopedName: "[local]",
        },
        // only write out CSS for the first bundle (avoids pointless extra files):
        inject: false,
        extract: "index.css",
      }),
      smartAsset({
        url: "inline",
        useHash: false,
        keepName: true,
        keepImport: true,
        assetsPath: "/asset",
        publicPath: "./asset",
      }),
      external(),
      images(),
      // terser()
    ],
  },
  {
    input: "src/Icon/Icon.js",
    output: [
      {
        file: `dist/Icon/index.js`,
        format: "es",
      },
    ],
    external: ["react", "react-proptypes"],
    plugins: [
      resolve({
        browser: true,
      }),
      babel({
        exclude: "node_modules/**",
      }),
      external(),
      images(),
      // terser()
    ],
  },
];
