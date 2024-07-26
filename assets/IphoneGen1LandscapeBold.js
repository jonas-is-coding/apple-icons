import * as React from "react";
const SvgIphonegen1LandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M23.542 17.393c2.13 0 3.56-1.49 3.56-3.71V3.553c0-2.13-1.43-3.55-3.56-3.55H3.562c-2.13 0-3.56 1.42-3.56 3.55v10.13c0 2.22 1.43 3.71 3.55 3.71Zm-1.62-3.03H5.182V3.023h16.74Zm-19.25-3.02c-.36 0-.6-.26-.6-.6v-4.11c0-.34.24-.6.6-.6s.59.26.59.6v4.11c0 .34-.23.6-.59.6m22.89-2.66c0 .67-.54 1.22-1.22 1.22-.67 0-1.21-.55-1.21-1.22s.54-1.21 1.21-1.21c.68 0 1.22.54 1.22 1.21" />
  </svg>
);
export default SvgIphonegen1LandscapeBold;
