import * as React from "react";
const SvgSliderhorizontalbelowrectangleBold = ({
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
    <path d="M4.012 15.917h16.18c2.58 0 4.01-1.4 4.01-3.98v-7.95c0-2.58-1.43-3.99-4.01-3.99H4.012c-2.51 0-4.01 1.41-4.01 3.99v7.95c0 2.58 1.43 3.98 4.01 3.98m.17-2.75c-.76 0-1.16-.41-1.16-1.16v-8.09c0-.75.4-1.16 1.16-1.16h15.83c.77 0 1.16.41 1.16 1.16v8.09c0 .75-.39 1.16-1.16 1.16Zm12.26 11.17c1.38 0 2.59-.84 3.13-2.02h3.28c.74 0 1.35-.66 1.35-1.42 0-.78-.6-1.41-1.35-1.41h-3.28a3.45 3.45 0 0 0-3.13-2.03c-1.39 0-2.59.84-3.13 2.03H1.372c-.76 0-1.37.65-1.37 1.41 0 .75.61 1.42 1.37 1.42h11.94a3.46 3.46 0 0 0 3.13 2.02m0-1.88c-.86 0-1.55-.71-1.55-1.56 0-.88.69-1.55 1.55-1.55.88 0 1.55.67 1.55 1.55 0 .85-.67 1.56-1.55 1.56" />
  </svg>
);
export default SvgSliderhorizontalbelowrectangleBold;
