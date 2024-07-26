import * as React from "react";
const SvgVisionproandarrowforwardfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.162 15.982c-2.63 0-4.89 4.09-9.86 4.09-4.32 0-7.59-3.47-8.13-8.35h6.77l1.32-.09-.58.49-1.01.94c-.21.22-.35.53-.35.84 0 .64.47 1.13 1.13 1.13.33 0 .58-.13.79-.34l3.07-3.13c.34-.34.5-.69.5-1.06 0-.38-.16-.73-.5-1.08l-3.07-3.12a1.07 1.07 0 0 0-.79-.34c-.66 0-1.13.48-1.13 1.14 0 .3.13.61.35.82l1.01.96.59.48-1.33-.08-6.82-.01c.58-8.45 8.55-9.27 18.04-9.27 9.87 0 18.08.88 18.08 10.26 0 5.64-3.47 9.81-8.21 9.81-4.97 0-7.23-4.09-9.87-4.09m-20.97-4.26c-.65 0-1.19-.54-1.19-1.22s.54-1.23 1.19-1.23h2.93c-.02.33-.03.65-.03.99 0 .51.03.99.08 1.46Z" />
  </svg>
);
export default SvgVisionproandarrowforwardfillBold;
