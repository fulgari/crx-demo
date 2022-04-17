import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

const plugins = [
  // copy({
  //   targets: [
  //     { src: "src/settings/index.html", dest: "rollup_build/settings/" },
  //   ],
  // }), // copy settings html file
  // resolve(), // 定位并将 node_modules 中的第三方依赖打包到 bundle 中
  typescript(), // 支持解析 typescript 语法
  commonjs(), // 转移 cjs 为 esm
];

export default [
  {
    input: "src/index.ts",
    output: {
      file: "rollup_build/index.js",
      format: "iife",
    },
    plugins,
  },
];
