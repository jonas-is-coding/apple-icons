import * as React from "react";
const SvgArrowturnrightupBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.602 22.458c5.11 0 7.79-2.25 7.79-7.39v-6.97l-.12-2.84 1.71 1.93 3.3 3.3c.3.32.7.53 1.2.53.93 0 1.62-.68 1.62-1.68 0-.41-.18-.82-.53-1.18l-7.63-7.63c-.31-.33-.79-.53-1.25-.53s-.94.2-1.25.53l-7.62 7.63c-.35.36-.54.77-.54 1.18 0 1 .7 1.68 1.62 1.68.5 0 .9-.21 1.22-.53l3.27-3.3 1.72-1.94-.12 2.85.01 6.71c0 3.15-1.33 4.27-4.44 4.27-.8 0-1.39-.06-1.89-.06-.99 0-1.67.61-1.67 1.61 0 1.1.89 1.57 1.63 1.7.64.1 1.29.13 1.97.13" />
  </svg>
);
export default SvgArrowturnrightupBold;
