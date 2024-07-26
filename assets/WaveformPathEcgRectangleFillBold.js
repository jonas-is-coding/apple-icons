import * as React from "react";
const SvgWaveformpathecgrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6.432 5.772-1.92 4.68H.002v-6.34c0-2.66 1.46-4.11 4.14-4.11h19.69c2.69 0 4.14 1.45 4.14 4.11v6.34h-5.23c-.56 0-.89.29-1.07.8l-.54 1.46-2.3-6.96c-.27-.84-1.52-.85-1.89.02l-1.92 4.68h-2.79c-.56 0-.89.29-1.09.8l-.52 1.46-2.3-6.96c-.28-.84-1.54-.85-1.89.02m-2.29 16.63c-2.68 0-4.14-1.45-4.14-4.11v-5.82h5.06c.67 0 1-.26 1.21-.78l1.06-2.63 2.32 7.47c.27.87 1.63.86 1.91-.02l1.28-4.04h2.8c.55 0 .87-.26 1.08-.78l1.14-2.65 2.31 7.49c.27.87 1.64.86 1.91-.02l1.27-4.04h4.62v5.82c0 2.66-1.45 4.11-4.14 4.11Z" />
  </svg>
);
export default SvgWaveformpathecgrectanglefillBold;
