import htm from "htm";
import { h } from "preact";
import { render as renderToString } from "preact-render-to-string";

export default htm.bind(h);

export function render(node) {
  return renderToString(node);
}
