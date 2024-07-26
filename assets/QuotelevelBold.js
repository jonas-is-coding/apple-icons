import * as React from "react";
const SvgQuotelevelBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.43 22.493c.76 0 1.38-.59 1.38-1.35v-19.8c0-.75-.63-1.34-1.38-1.34-.72 0-1.37.59-1.37 1.34v19.8c0 .75.63 1.35 1.37 1.35m5.99 0c.76 0 1.37-.59 1.37-1.35v-19.8c0-.75-.62-1.34-1.37-1.34-.73 0-1.37.59-1.37 1.34v19.8c0 .75.63 1.35 1.37 1.35m-13.46-7.19c.97.65 2.08.28 2.08-.89v-6.29c0-1.22-1.07-1.6-2.08-.92l-4.38 2.99c-.76.53-.79 1.64 0 2.18Zm20.94 0 4.37-2.93c.79-.54.76-1.66 0-2.18l-4.37-2.99c-1.02-.68-2.09-.3-2.09.92v6.29c0 1.17 1.11 1.54 2.09.89" />
  </svg>
);
export default SvgQuotelevelBold;
