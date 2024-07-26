import * as React from "react";
const SvgFlipphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.272 26.648c5.76 0 9.27-3.32 9.27-8.98V7.358c0-2.16-1.41-3.56-3.57-3.56H3.022v-2.29c0-.83-.68-1.51-1.51-1.51s-1.51.68-1.51 1.51v16.16c0 5.66 3.5 8.98 9.27 8.98m0-3c-3.87 0-6.25-2.16-6.25-5.84V6.818h11.17c.82 0 1.32.48 1.32 1.29v9.7c0 3.68-2.39 5.84-6.24 5.84m-4.23-7.9h8.47c.59 0 .96-.36.96-.96v-5.96c0-.6-.37-.97-.96-.97h-8.47c-.6 0-.98.36-.98.97v5.97c0 .6.38.95.98.95m2.39 5.88h3.61c.52 0 .96-.43.96-.94 0-.53-.44-.97-.96-.97h-3.61c-.52 0-.95.44-.95.97 0 .51.43.94.95.94" />
  </svg>
);
export default SvgFlipphoneBold;
