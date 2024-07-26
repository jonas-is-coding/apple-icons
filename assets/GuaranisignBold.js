import * as React from "react";
const SvgGuaranisignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.372 26.074c.41 0 .71-.29.71-.7v-1.9c5.09-.2 8.12-3.41 8.12-8.43v-.62c0-1.35-.75-2.18-1.99-2.18h-6.13v-6.28c1.74.18 3.22 1.17 3.91 2.8.45.79.98 1.2 1.91 1.2 1.02 0 1.74-.73 1.74-1.77 0-.41-.12-.89-.3-1.27-1.18-2.73-4.26-4.16-7.26-4.32v-1.9c0-.41-.3-.7-.71-.7s-.7.29-.7.7v1.91c-5.54.34-8.67 4.38-8.67 10.39 0 5.95 2.99 10.07 8.67 10.45v1.92c0 .41.29.7.7.7m-5.16-13.1c0-3.52 1.34-6.55 4.46-6.99v14.07c-3.12-.52-4.46-3.6-4.46-7.08m9.99 2.15-.01.74c-.02 2.42-1.58 4.08-4.11 4.26v-5Z" />
  </svg>
);
export default SvgGuaranisignBold;
