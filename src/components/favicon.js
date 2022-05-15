import html from "#lib/html.js";

// Based off https://www.faviator.xyz/

export const Favicon = ({ text }) => {
  return html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="230"
      height="230"
      viewBox="0 0 100 100"
    >
      <defs>
        <style type="text/css">
          text {
            font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
              segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
              sans-serif;
          }
        </style>
      </defs>

      <rect
        x="1.75"
        y="1.75"
        rx="50"
        ry="50"
        width="96.5"
        height="96.5"
        fill="rgb(59 130 246)"
      ></rect>

      <text
        x="50"
        y="50"
        dx="1"
        dy="-6"
        fill="#ffffff"
        font-size="88"
        text-anchor="middle"
        dominant-baseline="central"
      >
        ${text}
      </text>

      <rect
        x="1.75"
        y="1.75"
        rx="50"
        ry="50"
        width="96.5"
        height="96.5"
        fill-opacity="0"
        stroke="#feeeec"
        stroke-width="3.5"
      ></rect>
    </svg>
  `;


};
