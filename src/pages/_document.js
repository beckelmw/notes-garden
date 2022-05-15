export const HtmlPage = ({ head, content }) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bill Beckelman</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="/site.css" />
        ${head || ""}
      </head>
      <body>
        ${content}
        <script src="/js/site.js"></script>
      </body>
    </html>
  `;
};
