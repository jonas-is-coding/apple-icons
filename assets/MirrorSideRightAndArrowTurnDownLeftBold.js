import * as React from "react";
const SvgMirrorsiderightandarrowturndownleftBold = ({
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
    <path d="M25.762 18.606c4.52 0 7.51-2.13 8.3-5.91h-3.11c-.74 1.95-2.57 3.01-5.17 3.01h-13.65c-1.94 0-2.59-.54-2.79-2.29l-.95-8.48c-.15-1.43.46-2.01 2.31-2.01 3.65 0 10.49.2 14.47.65 2.52.28 4.32 1.43 5.25 3.29h3.3c-1.12-3.5-4.01-5.74-8.23-6.23-4.1-.48-11.11-.62-14.79-.64-3.61 0-5.58 2.03-5.23 5.28l.33 3.07c.09.86-.33 1.24-1.1 1.24h-2.62c-1.2 0-2.08.88-2.08 2.07v5.5c0 1.83 1.23 2.39 2.94 1.95 1.39-.36 2.81-.5 4.65-.5Zm12.68-12.1v-1.42c0-.64-.53-1.16-1.18-1.16-.63 0-1.16.52-1.16 1.16v1.42c0 1.31-.89 2.13-2.28 2.13h-6.67v-1.08c0-.94-.71-1.31-1.51-.76l-3.19 2.2c-.63.45-.62 1.21 0 1.64l3.21 2.21c.78.52 1.49.16 1.49-.76v-1.16h6.67c2.82 0 4.62-1.72 4.62-4.42" />
  </svg>
);
export default SvgMirrorsiderightandarrowturndownleftBold;
