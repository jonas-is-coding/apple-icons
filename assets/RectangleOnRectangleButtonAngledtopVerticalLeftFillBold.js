import * as React from "react";
const SvgRectangleonrectanglebuttonangledtopverticalleftfillBold = ({
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
    <path d="M7.552 26.203h10.35c2.56 0 4.08-1.51 4.08-4.05V4.063c0-2.48-1.57-4.06-4.05-4.06h-3.65c-1.95 0-3.64.51-5.2 1.95l-7.41 6.81c-1.12 1.02-1.67 2.48-1.67 4.22v5.67c0 4.55 2.99 7.55 7.55 7.55m-2.38-8.87v-4.68c0-.99.54-1.52 1.52-1.52h6.55c.95 0 1.48.48 1.52 1.32v.03h-5.74c-1.49 0-2.4.94-2.4 2.38v3.98h-.04c-.91-.03-1.41-.56-1.41-1.51m3.85 3.75c-1.01 0-1.53-.53-1.53-1.52v-4.7c0-.98.52-1.51 1.53-1.51h6.55c.99 0 1.53.53 1.53 1.51v4.7c0 .99-.54 1.52-1.53 1.52Z" />
  </svg>
);
export default SvgRectangleonrectanglebuttonangledtopverticalleftfillBold;
