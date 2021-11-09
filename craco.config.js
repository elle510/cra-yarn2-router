// const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './',
        tsConfigPath: './tsconfig.paths.json',
        debug: false,
      },
    },
  ],
  // webpack: {
  //   alias: {
  //     '@/components': path.resolve(__dirname, 'src/components'),
  //     '@/context': path.resolve(__dirname, 'src/context'),
  //     '@/hooks': path.resolve(__dirname, 'src/hooks'),
  //     '@/lib': path.resolve(__dirname, 'src/lib'),
  //     '@/routes': path.resolve(__dirname, 'src/routes'),
  //     '@/styles': path.resolve(__dirname, 'src/styles'),
  //   },
  // },
};
