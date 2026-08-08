import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);
const repositoryRoot = resolve(currentDir, "..", "..");
const profileFilePath = resolve(repositoryRoot, "about_me.md");

export const profileContext = readFileSync(profileFilePath, "utf8");