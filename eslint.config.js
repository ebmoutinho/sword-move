import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    { ignores: ["dist"] },
    js.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname, //holds the absolute path for my tsconfig file
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "import/no-unresolved": "error", //enforces import/no-unresolved
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin", //built-in libraries (react, node, etc)
                        "external", //external libraries (third-party libraries)
                        "internal", //index imports (e.g., CSS files and others)
                        "parent", //parent imports
                        "sibling", //sibling imports
                        "index",
                        "type", //type imports
                        "object",
                    ],
                    pathGroups: [
                        {
                            pattern: "{react,react-*}", //all react-related libraries
                            group: "builtin",
                            position: "before",
                        },
                        {
                            pattern: "*", //third-party libraries
                            group: "external",
                            position: "after",
                        },
                        //alias imports (@)
                        {
                            pattern: "@/routes/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/tests/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/pages/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/components/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/assets/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/themes/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/types/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/enums/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/utils/**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "@/stories/**",
                            group: "parent",
                            position: "before",
                        },
                        //parent imports
                        {
                            pattern: "../../../../../**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../../../../**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../../../**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../../**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../**",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../**/*.types",
                            group: "parent",
                            position: "before",
                        },
                        {
                            pattern: "../**/*.styles",
                            group: "parent",
                            position: "before",
                        },
                        //sibling imports
                        {
                            pattern: "./components/**",
                            group: "sibling",
                            position: "before",
                        },
                        {
                            pattern: "./**/*.types",
                            group: "sibling",
                            position: "after",
                        },
                        {
                            pattern: "./**/*.styles",
                            group: "sibling",
                            position: "after",
                        },
                    ],
                    "newlines-between": "always", //ensures newlines between groups, but React group will be treated as one
                    pathGroupsExcludedImportTypes: ["builtin"],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                },
            ],
            "linebreak-style": ["error", "unix"], //enforces consistent line endings. Unix, the default, enforces LF
            "no-console": "warn",
            "no-unreachable": "warn", //warns about unreachable code
            "padding-line-between-statements": [
                "warn",
                { blankLine: "always", prev: "*", next: "return" },
                { blankLine: "always", prev: "*", next: "if" },
                { blankLine: "always", prev: "*", next: "for" },
                { blankLine: "always", prev: "*", next: "switch" },
                { blankLine: "always", prev: "block-like", next: "*" },
            ],
            "react-hooks/exhaustive-deps": "warn",
            semi: ["error", "always"], //enforces semicolons after all statements
            "styled-components/no-vendor-prefixes": "off", //disables errors from -webkit-, -moz-, -ms-, etc, in css files
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
            ],
        },
    },
    //overrides, doesn't apply TS type checking
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.node,
        },
    },
]);
