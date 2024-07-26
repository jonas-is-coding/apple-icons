import * as React from "react";
const SvgDecreasequotelevelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.372 22.493c.76 0 1.38-.59 1.38-1.35v-19.8c0-.75-.63-1.34-1.38-1.34-.72 0-1.37.59-1.37 1.34v19.8c0 .75.63 1.35 1.37 1.35m10.37-7.19c.96.65 2.07.28 2.07-.89v-6.29c0-1.22-1.06-1.6-2.07-.92l-4.38 2.99c-.76.52-.8 1.64 0 2.18Z" />
  </svg>
);
export default SvgDecreasequotelevelBold;
