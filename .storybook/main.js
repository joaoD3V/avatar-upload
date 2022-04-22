module.exports = {
  stories: ["../src/components/**/stories.tsx"],
  addons: ['@storybook/addon-essentials', '@storybook/addon-info', "@react-theming/storybook-addon"],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
