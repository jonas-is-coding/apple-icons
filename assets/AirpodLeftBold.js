import * as React from "react";
const SvgAirpodleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.562 10.455a6.33 6.33 0 0 0 5.24-2.89c.28-.43.41-.92.41-1.44v-1.79c0-.53-.13-1.03-.41-1.46-1.04-1.52-2.8-2.88-5.24-2.88-3.01 0-5.51 2.35-5.56 5.22-.04 2.88 2.54 5.27 5.56 5.24m3.04-3.11c-.38 0-.66-.29-.66-.65v-2.92c0-.38.28-.66.66-.66.36 0 .64.28.64.66v2.92c0 .36-.28.65-.64.65m-3.32 12.89v-8.35c-1.51-.05-2.9-.55-4.07-1.43v9.78Zm-1.52 4.22c.91 0 1.52-.53 1.52-1.4v-1.35h-4.07v1.35c0 .87.59 1.4 1.52 1.4Z" />
  </svg>
);
export default SvgAirpodleftBold;
