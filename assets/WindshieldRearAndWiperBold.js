import * as React from "react";
const SvgWindshieldrearandwiperBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.152 18.252h6.82l1.36 2.33c-.39.52-.62 1.15-.62 1.85 0 1.7 1.38 3.09 3.08 3.09s3.08-1.39 3.08-3.09c0-1.71-1.38-3.09-3.08-3.09h-.07l-.64-1.09h11.37c2.63 0 4.15-1.51 4.15-4.09v-8.58c0-2.58-1.52-4.09-4.15-4.09H4.362l-.48-.83c-.37-.63-1.16-.85-1.85-.48-.66.36-.85 1.2-.47 1.84l.07.13c-1.06.67-1.63 1.85-1.63 3.43v8.58c0 2.58 1.52 4.09 4.15 4.09m21.28-13.93c.84 0 1.36.49 1.36 1.38v8.34c0 .89-.52 1.39-1.36 1.39h-12.99l-6.44-11.11Zm-21.26 11.11c-.86 0-1.35-.5-1.35-1.39v-8.34c0-.41.11-.74.31-.97l6.21 10.7Zm10.62 8.05c-.59 0-1.06-.47-1.06-1.05s.47-1.06 1.06-1.06c.58 0 1.05.48 1.05 1.06s-.47 1.05-1.05 1.05" />
  </svg>
);
export default SvgWindshieldrearandwiperBold;
