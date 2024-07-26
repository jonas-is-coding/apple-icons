import * as React from "react";
const SvgMusicquarternote3Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.702 14.733c0 2 1.57 3.44 3.74 3.44 1.81 0 4.71-1.42 4.71-5.09V1.173c0-.65-.54-1.17-1.19-1.17-.64 0-1.18.52-1.18 1.17v8.64c0 .37-.13.59-.42.65l-1.88.41c-2.51.54-3.78 1.85-3.78 3.86m-10.7 5.97c0 2.02 1.56 3.46 3.74 3.46 1.81 0 4.7-1.43 4.7-5.1v-11.9c0-.65-.53-1.19-1.18-1.19a1.2 1.2 0 0 0-1.19 1.19v8.62c0 .39-.12.61-.42.67l-1.87.4c-2.52.55-3.78 1.86-3.78 3.85m19.38 0c0 2.02 1.56 3.46 3.74 3.46 1.82 0 4.7-1.42 4.7-5.1v-11.9c0-.65-.53-1.17-1.17-1.17-.66 0-1.2.52-1.2 1.17v8.62c0 .39-.12.61-.42.67l-1.88.4c-2.5.55-3.77 1.86-3.77 3.85" />
  </svg>
);
export default SvgMusicquarternote3Bold;
