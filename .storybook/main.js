const path = require('path');
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx|vue)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async config => {
        config.resolve.alias = {
            '@': path.resolve(__dirname, '../src/'),
            vue: 'vue/dist/vue.esm-bundler.js',
        };
        config.resolve.extensions = ['.js', '.jsx', '.css', '.scss', '.vue'];
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });
        return config;
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/app.scss";`
            }
        }
    }
};
