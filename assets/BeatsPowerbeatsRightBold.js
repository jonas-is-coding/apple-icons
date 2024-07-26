import * as React from "react";
const SvgBeatspowerbeatsrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.692 25.08h1.46v-4.33c.48-.42.83-1.12.94-1.78a4.42 4.42 0 0 1-3.47-4.31c0-1.34.62-2.53 1.69-3.4.51-4.89 3.71-9.07 7.36-9.07 2.2 0 3.18 1.61 3.18 4.75l-9.07 4.73c-1.34.69-1.98 1.82-1.98 2.99 0 1.77 1.44 3.23 3.19 3.23.84 0 1.41-.21 2.61-.86l4.68-2.57c2.04-1.12 2.77-2.48 2.77-5.37V6.48c0-3.96-1.77-6.48-5.27-6.48-5.35 0-9.78 6.18-9.78 13.63 0 3.03.69 6.35 1.69 7.26Zm3.25-8.42a2 2 0 1 1 0-4c1.11 0 2.01.9 2.01 2s-.9 2-2.01 2m0-.9c.61 0 1.11-.5 1.11-1.1s-.5-1.09-1.11-1.09-1.1.49-1.1 1.09.49 1.1 1.1 1.1" />
  </svg>
);
export default SvgBeatspowerbeatsrightBold;
