const CracoLessPlugin = require('craco-less');
const { getThemeVariables } = require('antd/dist/theme');


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: getThemeVariables({
              dark: true,
              compact: true,
              '@primary-color': '#490f9e'
            }),
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
