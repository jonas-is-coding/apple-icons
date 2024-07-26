import * as React from "react";
const SvgEnvelopeopenfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.262 25.175 9.46-8.5-5.95-5.95c-.28-.29-.26-.68.1-.92l9.62-6.51c.89-.6 1.56-.6 2.43 0l9.63 6.51c.35.24.36.65.05.96l-5.91 5.91 9.46 8.52c.18-.5.26-1.07.26-1.73v-11.56c0-2.01-.68-3.3-2.19-4.31l-9.66-6.55c-2.07-1.39-3.64-1.39-5.7 0l-9.66 6.55c-1.52 1.01-2.2 2.3-2.2 4.31v11.56c0 .64.09 1.21.26 1.71m3.88 2.4h21.15c1.27 0 2.2-.33 2.87-.89l-11.84-10.66c-.57-.52-1.04-.72-1.61-.72s-1.04.2-1.61.72l-11.86 10.64c.68.57 1.59.91 2.9.91" />
  </svg>
);
export default SvgEnvelopeopenfillBold;
