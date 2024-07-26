import * as React from "react";
const SvgTextmagnifyingglassBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.005 9.884c0 5.44 4.41 9.86 9.86 9.86 1.82 0 3.49-.5 4.92-1.37l4.72 4.71c.45.46 1.06.68 1.69.68 1.36 0 2.37-1.03 2.37-2.37 0-.63-.22-1.21-.68-1.68l-4.66-4.68a9.4 9.4 0 0 0 1.52-5.15 9.87 9.87 0 0 0-9.88-9.88c-5.45 0-9.86 4.41-9.86 9.88m3.19 0c0-3.68 3-6.67 6.67-6.67 3.68 0 6.67 2.99 6.67 6.67 0 3.66-2.99 6.66-6.67 6.66-3.67 0-6.67-3-6.67-6.66m3.58-.6h6.29c.52 0 .9-.45.9-.93 0-.51-.38-.92-.9-.92h-6.29c-.53 0-.92.41-.92.92 0 .49.4.93.92.93m0 3.02h4.48c.5 0 .9-.42.9-.92 0-.51-.4-.93-.9-.93h-4.48c-.53 0-.92.42-.92.93 0 .5.4.92.92.92" />
  </svg>
);
export default SvgTextmagnifyingglassBold;
