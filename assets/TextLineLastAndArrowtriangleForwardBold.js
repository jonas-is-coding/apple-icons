import * as React from "react";
const SvgTextlinelastandarrowtriangleforwardBold = ({
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
    <path d="M9.383 2.753h22.46c.75 0 1.35-.62 1.35-1.38 0-.74-.6-1.37-1.35-1.37H9.383c-.73 0-1.33.64-1.33 1.37 0 .75.58 1.38 1.33 1.38m0 6.07h22.46c.75 0 1.35-.61 1.35-1.37 0-.74-.6-1.38-1.35-1.38H9.383c-.73 0-1.33.65-1.33 1.38 0 .74.58 1.37 1.33 1.37m0 6.09h22.46c.75 0 1.35-.62 1.35-1.38 0-.74-.6-1.37-1.35-1.37H9.383c-.73 0-1.33.65-1.33 1.37 0 .75.58 1.38 1.33 1.38m-7.95 8.36 4.37-2.61c.67-.41.65-1.28 0-1.67l-4.37-2.63c-.71-.43-1.43-.05-1.43.77v5.37c0 .83.74 1.19 1.43.77m8.2-1.28h21.97c1.03 0 1.59-.54 1.59-1.57v-1.23c0-1.02-.56-1.57-1.59-1.57H9.633c-1.03 0-1.58.55-1.58 1.57v1.23c0 1.03.55 1.57 1.58 1.57" />
  </svg>
);
export default SvgTextlinelastandarrowtriangleforwardBold;
