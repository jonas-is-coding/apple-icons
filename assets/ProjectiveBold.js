import * as React from "react";
const SvgProjectiveBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.842 16.563c.57 0 1.03-.24 1.38-.61l7.41-7.9 7.4 7.9c.34.37.81.61 1.39.61 1.03 0 1.84-.86 1.84-1.89 0-.46-.12-.84-.52-1.28l-8.67-9.22c-.32-.35-.67-.55-1.08-.62h8.11c1.05 0 1.78-.78 1.78-1.78 0-1.01-.73-1.77-1.78-1.77H2.152c-1.05 0-1.79.78-1.79 1.77 0 1 .74 1.78 1.79 1.78h8.11c-.41.07-.76.27-1.07.63l-8.68 9.21c-.39.44-.51.82-.51 1.28 0 1.03.82 1.89 1.84 1.89" />
  </svg>
);
export default SvgProjectiveBold;
