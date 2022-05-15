import html from "#lib/html.js";

export function head() {
  return html` <meta name="author" content="Bill Beckelman" /> `;
}

export default function Index() {
  return html` <h1>Notes</h1> `;
}
