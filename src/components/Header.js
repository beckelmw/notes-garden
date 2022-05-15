import html from "#lib/html.js";

export const Header = () => {
  return html`
    <div class="site-header bg-blue-500">
      <nav class="flex py-4 gap-4">
        <a href="/">Home</a>
      </nav>
      <div id="menu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  `;
};
