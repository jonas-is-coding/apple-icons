import * as React from "react";
const SvgCharactercursoribeamBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.742 25.848h6.73c.83 0 1.26-.38 1.26-1.06 0-.69-.43-1.06-1.26-1.06h-2.11V2.108h2.11c.83 0 1.26-.37 1.26-1.08 0-.67-.43-1.03-1.26-1.03h-6.73c-.83 0-1.27.36-1.27 1.03 0 .71.44 1.08 1.27 1.08h2.19v21.62h-2.19c-.83 0-1.27.37-1.27 1.06 0 .68.44 1.06 1.27 1.06m-15.91-3.91c1.06 0 1.64-.47 1.94-1.59l.95-2.77h6.24l.93 2.77c.32 1.12.89 1.59 1.96 1.59 1.16 0 1.91-.7 1.91-1.77 0-.42-.07-.76-.21-1.2l-4.62-12.79c-.49-1.44-1.46-2.14-3.07-2.14-1.51 0-2.48.71-2.97 2.13l-4.69 12.94c-.14.41-.2.77-.2 1.11 0 1.06.69 1.72 1.83 1.72m3.69-7.21 2.28-7.08h.09l2.28 7.08Z" />
  </svg>
);
export default SvgCharactercursoribeamBold;
