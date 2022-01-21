import { registerAs } from "@nestjs/config";

export const configNamespace = registerAs("namespace", () => ({
    dev: process.env.DEV,
    prod: process.env.PROD,
}));
