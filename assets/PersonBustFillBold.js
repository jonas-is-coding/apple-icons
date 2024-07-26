import * as React from "react";
const SvgPersonbustfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.782 8.46c2.19.01 3.91-1.86 3.91-4.27 0-2.27-1.73-4.19-3.91-4.19-2.17 0-3.93 1.92-3.91 4.19.01 2.41 1.72 4.26 3.91 4.27m-6.46 8.61h12.92c.97 0 1.53-.55 1.53-1.38 0-2.06-2.89-5.75-7.99-5.75s-7.99 3.69-7.99 5.75c0 .83.56 1.38 1.53 1.38m-2.95 9.09h18.81c.76 0 1.38-.63 1.38-1.39 0-.75-.62-1.37-1.38-1.37h-.73v-2.13c0-1.49-.89-2.44-2.44-2.44H4.552c-1.55 0-2.44.95-2.44 2.44v2.13h-.74c-.75 0-1.37.62-1.37 1.37 0 .76.62 1.39 1.37 1.39m7.17-2.66c-.55 0-.99-.44-.99-1s.44-1 .99-1h4.48c.56 0 .99.44.99 1s-.43 1-.99 1Z" />
  </svg>
);
export default SvgPersonbustfillBold;
