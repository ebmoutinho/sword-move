import GlobalStyles from "../src/styles/global.styles";

import type { Decorator, Preview } from "@storybook/react-vite";

export const decorators: Decorator[] = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    ),
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo",
        },
    },
};

export default preview;
