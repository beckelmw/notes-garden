import html from "#lib/html.js";

export const Sidebar = ({ children }) => {
  return html`
    <aside id="sidebar" class="bg-gray-200">
      <h2>Sidebar</h2>
      ${children}
    </aside>
  `;
};
