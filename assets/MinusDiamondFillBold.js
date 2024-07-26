import * as React from "react";
const SvgMinusdiamondfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m7.97-1.52c-.83 0-1.43-.57-1.43-1.39s.59-1.38 1.43-1.38h8.8c.84 0 1.42.56 1.42 1.38s-.6 1.39-1.42 1.39Z" />
  </svg>
);
export default SvgMinusdiamondfillBold;
