import * as React from "react";
const SvgTextlinefirstandarrowtriangleforwardBold = ({
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
    <path d="m1.433 7.099 4.37-2.63c.67-.4.65-1.27 0-1.66L1.433.179c-.71-.43-1.43-.05-1.43.77v5.37c0 .83.74 1.2 1.43.78m8.2-1.28h21.97c1.03 0 1.59-.55 1.59-1.57v-1.24c0-1.01-.56-1.56-1.59-1.56H9.633c-1.03 0-1.58.55-1.58 1.56v1.24c0 1.02.55 1.57 1.58 1.57m-.25 5.46h22.46c.75 0 1.35-.65 1.35-1.38 0-.77-.6-1.38-1.35-1.38H9.383c-.75 0-1.33.64-1.33 1.38 0 .72.6 1.38 1.33 1.38m0 6.08h22.46c.75 0 1.35-.64 1.35-1.38 0-.75-.6-1.37-1.35-1.37H9.383c-.75 0-1.33.63-1.33 1.37 0 .72.6 1.38 1.33 1.38m0 6.08h22.46c.75 0 1.35-.64 1.35-1.38 0-.76-.6-1.37-1.35-1.37H9.383c-.75 0-1.33.62-1.33 1.37 0 .73.6 1.38 1.33 1.38" />
  </svg>
);
export default SvgTextlinefirstandarrowtriangleforwardBold;
