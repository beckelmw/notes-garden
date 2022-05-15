import { writeFile, readFile, mkdir } from "fs/promises";
import { render as renderToString } from "preact-render-to-string";
import { Favicon } from "#components/favicon.js";

const pkg = await readFile("./package.json", "utf-8");
const pkgJson = JSON.parse(pkg);

await mkdir("./public", { recursive: true });

await writeFile(
  "./public/favicon.svg",
  renderToString(Favicon({ text: pkgJson.name.charAt(0) })),
  "utf-8"
);
