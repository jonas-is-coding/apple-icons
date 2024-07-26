import * as React from "react";
const SvgArrowturnrightdownBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.602-.002c-.68 0-1.33.04-1.97.13-.74.12-1.63.61-1.63 1.71 0 .99.68 1.61 1.67 1.61.5 0 1.09-.06 1.89-.06 3.11 0 4.44 1.12 4.44 4.26l-.01 6.72.12 2.84-1.72-1.94-3.27-3.29c-.32-.32-.72-.54-1.22-.54-.92 0-1.62.68-1.62 1.68 0 .41.19.83.54 1.18l7.62 7.64c.31.32.79.52 1.25.52s.94-.2 1.25-.52l7.63-7.64c.35-.35.53-.77.53-1.18 0-1-.69-1.68-1.62-1.68-.5 0-.9.22-1.2.54l-3.3 3.29-1.71 1.94.12-2.84v-6.98c0-5.13-2.68-7.39-7.79-7.39" />
  </svg>
);
export default SvgArrowturnrightdownBold;
