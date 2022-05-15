import { writeFile, mkdir } from "fs/promises";
import { render as renderToString } from "preact-render-to-string";
import PageNotFound from "#pages/404.js";
import { HtmlPage } from "#pages/_document.js";
import html from "#lib/html.js";
import { Header } from "#components/Header.js";
import { Main } from "#components/Main.js";
import { Footer } from "#components/Footer.js";

await mkdir("./public", { recursive: true });

const page = html`<${Header} />
  <${Main}>
    <${PageNotFound} />
  <//>
  <${Footer} />`;

await writeFile(
  "./public/404.html",
  HtmlPage({ content: renderToString(page) }),
  "utf-8"
);
