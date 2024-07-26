import * as React from "react";
const SvgIphonecaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.702 27.091h10.14c2.13 0 3.56-1.42 3.56-3.55V3.561c0-2.13-1.43-3.56-3.56-3.56H3.702c-2.21 0-3.7 1.43-3.7 3.56v19.98c0 2.13 1.49 3.55 3.7 3.55m.38-18.61c-.88 0-1.43-.51-1.43-1.34v-2.98c0-.82.55-1.34 1.43-1.34h2.79c.89 0 1.43.52 1.43 1.34v2.98c0 .83-.54 1.34-1.43 1.34Z" />
  </svg>
);
export default SvgIphonecaseBold;
