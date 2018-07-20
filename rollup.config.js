import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import serve from 'rollup-plugin-serve';

export default [
  {
    input: './src/index.ts',
    output: {
      file: 'lib/uikit-react.js',
      format: 'es',
    },
    plugins: [typescript()],
  },
];
