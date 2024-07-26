import * as React from "react";
const SvgArrowtriangleheadupanddownrighttriangleuprighttriangledownBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.36 2.223c0-1.5-.88-2.22-2.03-2.22-.61 0-1.07.17-1.6.5l-13.61 8.65c-.97.6-1.4 1.53-1.4 2.41 0 1.29.91 2.46 2.52 2.46h13.64c1.67 0 2.48-.82 2.48-2.49ZM5.89 22.773h-1.5V6.853h1.5c.94 0 1.22-.83.67-1.57L4.1 2.003c-.39-.52-.96-.5-1.34 0L.29 5.283c-.56.74-.29 1.57.68 1.57h1.47v15.92H.98c-.98 0-1.25.82-.69 1.57l2.47 3.28c.39.49.95.5 1.34 0l2.46-3.28c.55-.74.27-1.57-.67-1.57m18.58-18.68v6.66c0 .25-.12.37-.35.37H12.89c-.12 0-.14-.12-.05-.18l11.19-7.05c.17-.11.44-.07.44.2m2.89 23.31v-9.32c0-1.68-.81-2.49-2.48-2.49H11.24c-1.61 0-2.52 1.18-2.52 2.47 0 .87.43 1.81 1.4 2.4l13.61 8.66c.53.33.99.5 1.6.5 1.15 0 2.03-.72 2.03-2.22m-2.89-1.88c0 .28-.27.32-.44.21l-11.19-7.05c-.09-.07-.07-.18.05-.18h11.23c.23 0 .35.12.35.35Z" />
  </svg>
);
export default SvgArrowtriangleheadupanddownrighttriangleuprighttriangledownBold;
