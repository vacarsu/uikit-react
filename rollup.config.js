import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/index.ts',
    output: {
        file: 'lib/uikit-react.js',
        format: 'cjs'
    },
    plugins: [
        typescript()
    ],
    externals: [
        'react',
        'react-dom',
        'classnames'
    ]
}