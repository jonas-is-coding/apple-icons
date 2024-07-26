import * as React from "react";
const SvgPointbottomleftforwardtoarrowtrianglescurvepathBold = ({
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
    <path d="M4.352 27.263c1.78 0 3.31-1.08 3.98-2.62h7.45c4.25 0 7-2.26 7-5.84 0-3.65-2.67-6.02-7.76-6.53l-6.85-.72c-3.6-.37-5.15-1.54-5.15-3.34 0-1.78 1.41-2.82 3.96-2.82h9.37v1.44c0 .93.79 1.16 1.46.66l3.89-2.93c.49-.38.51-.99 0-1.36l-3.88-2.94c-.68-.51-1.47-.27-1.47.66v1.45h-9.37c-4.24 0-6.98 2.26-6.98 5.84 0 3.65 2.66 6.02 7.73 6.53l6.87.72c3.61.37 5.16 1.54 5.16 3.34 0 1.78-1.41 2.82-3.98 2.82h-7.29a4.32 4.32 0 0 0-4.14-3.06c-2.39 0-4.34 1.95-4.34 4.34 0 2.41 1.95 4.36 4.34 4.36m0-2.71c-.92 0-1.64-.73-1.64-1.65 0-.93.71-1.63 1.64-1.63s1.64.7 1.64 1.63c0 .94-.71 1.65-1.64 1.65" />
  </svg>
);
export default SvgPointbottomleftforwardtoarrowtrianglescurvepathBold;
