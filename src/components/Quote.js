import html from "#lib/html.js";

export default ({ children, link }) => {
  return html`
    <figure class="p-4 border-l-4 mb-4 border-l-green-500 bg-gray-200">
      <blockquote class="before:content-['“'] after:content-['”']">
        ${children}
      </blockquote>
      <figcaption class="text-right">
        – <cite><a href="${link}">${link}</a></cite>
      </figcaption>
    </figure>
  `;
};
