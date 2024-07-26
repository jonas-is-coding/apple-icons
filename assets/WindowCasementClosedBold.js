import * as React from "react";
const SvgWindowcasementclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.143c0 .84.69 1.52 1.52 1.52h23.28c.84 0 1.53-.68 1.53-1.52 0-.85-.69-1.53-1.53-1.53h-.45V2.623c0-1.57-1.05-2.62-2.65-2.62h-17.1c-1.58 0-2.64 1.05-2.64 2.62v19.99h-.44c-.83 0-1.52.68-1.52 1.53m4.99-16.22v-4.59c0-.18.11-.3.28-.3h6.68v4.89Zm9.38-.01v-4.88h6.68c.16 0 .28.12.28.3v4.58Zm-9.38 7.34v-4.87h6.96v4.87Zm9.38 0v-4.87h6.96v4.87Zm-9.38 7.36v-4.88h6.96v4.88Zm9.38 0v-4.88h6.96v4.88Z" />
  </svg>
);
export default SvgWindowcasementclosedBold;
