import * as React from "react";
const SvgIncreasequotelevelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.372 22.493c.76 0 1.38-.59 1.38-1.35v-19.8c0-.75-.63-1.34-1.38-1.34-.72 0-1.37.59-1.37 1.34v19.8c0 .75.63 1.35 1.37 1.35m5.99 0c.76 0 1.38-.59 1.38-1.35v-19.8c0-.75-.63-1.34-1.38-1.34-.72 0-1.37.59-1.37 1.34v19.8c0 .75.63 1.35 1.37 1.35m5.99 0c.76 0 1.37-.59 1.37-1.35v-19.8c0-.75-.64-1.34-1.37-1.34s-1.39.59-1.39 1.34v19.8c0 .75.65 1.35 1.39 1.35m7.46-7.19 4.38-2.93c.8-.54.77-1.65 0-2.18l-4.38-2.99c-1.01-.68-2.07-.3-2.07.92v6.29c0 1.17 1.11 1.54 2.07.89" />
  </svg>
);
export default SvgIncreasequotelevelBold;
