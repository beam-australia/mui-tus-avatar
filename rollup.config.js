import babel from "rollup-plugin-babel";
import builtins from 'rollup-plugin-node-builtins';
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    builtins(),
    postcss({
      extract: true,
      modules: false
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve({
      browser: true
    }),
    commonjs()
  ]
};
