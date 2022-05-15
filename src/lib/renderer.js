import { render } from "./html.js";
import { SECURITY_HEADERS, APPLICATION_JSON, TEXT_HTML } from "./constants.js";
import * as PageNotFound from "#pages/404.js";
import { HtmlPage } from "#pages/_document.js";
import { Header } from "#components/Header.js";
import { Main } from "#components/Main.js";
import { Footer } from "#components/Footer.js";
import {  Sidebar } from "#components/Sidebar.js";
import html from "./html";

const isFunction = (fn) => {
  return typeof fn === "function";
};

export function createRenderer({ request, env }) {
  return async (Layout, Page, params) => {
    let data = {};
    let headers = {
      ...SECURITY_HEADERS,
    };

    // Idea from https://medium.com/@ijoeyguerra/content-negotiation-in-node-js-augmenting-express-js-78ea9de8bda0
    const wantsJson =
      request.headers.has("accept") &&
      request.headers
        .get("accept")
        .split(",")
        .find((x) => x === APPLICATION_JSON);

    if (wantsJson) {
      headers["content-type"] = APPLICATION_JSON;
      if (isFunction(Page.api)) {
        data = await Page.api({ request, env, params });
        if (data.errorCode) {
          return new Response(JSON.stringify({}), {
            status: data.errorCode,
            headers,
          });
        }
        return new Response(JSON.stringify(data), { headers });
      }
      {
        return new Response(JSON.stringify({}), { status: 404, headers });
      }
    }

    // HTML
    let head = "";
    headers["content-type"] = TEXT_HTML;

    if (isFunction(Page.api)) {
      data = await Page.api({ request, env, params });
      if (data.errorCode) {
        const content = render(PageNotFound.default());
        return new Response(HtmlPage({ content }), {
          status: data.errorCode,
          headers,
        });
      }
    }

    // TODO Rework everything below here to stream as a response
    if (isFunction(Page.headers)) {
      headers = { ...headers, ...Page.headers({ request, env, props: data }) };
    }

    if (isFunction(Page.head)) {
      head = render(Page.head({ request, env, props: data }));
    }

    const header = render(html`<${Header} />`);
    const sidebar = render(html`<${Sidebar} />`);
    const main = render(
      html`<${Main}>${Page.default({ request, env, params, props: data })}<//>`
    );
    const footer = render(html`<${Footer} />`);
    const content = Layout({ content: `${header}\n${sidebar}\n${main}\n${footer}`, head });
    return new Response(content, { headers });
  };
}
