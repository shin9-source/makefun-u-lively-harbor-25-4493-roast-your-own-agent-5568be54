import { mkdirSync, writeFileSync } from "node:fs";

const text = "My agent read the docs 11 times, apologized twice, and confidently deployed the exact bug it was hired to fix.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
