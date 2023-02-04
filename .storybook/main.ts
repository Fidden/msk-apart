export default {
    stories: ['../src/client/shared/components/**/*.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false,
            },
        },
    ],
};
