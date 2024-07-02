/// <reference types="vitest"/>
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import * as  path from 'path'


export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
        include: ["src/**/*.spec.tsx","src/**/*.spec.ts", "src/**/*.test.ts"],
        coverage:{
            exclude:[
                ...configDefaults.coverage.exclude,
                "*/types/*",
                "src/main.tsx",      
             ],
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, './src') }]
    }
});