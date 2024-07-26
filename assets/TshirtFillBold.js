import * as React from "react";
const SvgTshirtfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.902 26.695h11.99c2.39 0 3.69-1.28 3.71-3.64l.14-10.75 2.11.46c1.54.3 2.58-.32 2.9-1.75l.96-4.28c.32-1.45-.28-2.57-1.68-3.16l-7.99-3.37c-.64-.27-1.19-.27-1.77.01-1.64.76-2.74 1.08-4.37 1.08s-2.74-.32-4.37-1.08c-.59-.28-1.14-.28-1.78-.01l-7.98 3.37c-1.4.59-2.01 1.71-1.69 3.16l.97 4.28c.31 1.43 1.35 2.05 2.9 1.75l2.1-.46.14 10.75c.03 2.36 1.32 3.64 3.71 3.64m6-21.17c-1.7 0-3.1-.92-3.63-2.24 1.12.36 2.35.55 3.63.55 1.27 0 2.5-.19 3.63-.55-.52 1.31-1.92 2.24-3.63 2.24" />
  </svg>
);
export default SvgTshirtfillBold;
