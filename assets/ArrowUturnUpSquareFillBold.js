import * as React from "react";
const SvgArrowuturnupsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.406h14.13c2.68 0 4.13-1.45 4.13-4.11V4.116c0-2.66-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v14.18c0 2.66 1.46 4.11 4.14 4.11m5.77-5.03c-2.93 0-4.86-1.98-4.86-4.92v-1.72c0-.74.46-1.23 1.12-1.23s1.11.49 1.11 1.22v1.73c0 1.59 1.05 2.67 2.63 2.67 1.53 0 2.56-1.06 2.56-2.68v-3.49l.07-.98-.42.63-1.13 1.28c-.19.23-.46.34-.73.34-.58 0-1.06-.49-1.06-1.05 0-.28.09-.55.29-.74l3.28-3.23a1.114 1.114 0 0 1 1.6 0l3.27 3.23c.21.2.31.45.31.73 0 .55-.49 1.05-1.06 1.05a.96.96 0 0 1-.73-.33l-1.07-1.16-.56-.76.07.99v3.49c0 2.95-1.88 4.93-4.69 4.93" />
  </svg>
);
export default SvgArrowuturnupsquarefillBold;
