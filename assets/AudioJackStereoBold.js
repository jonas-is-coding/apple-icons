import * as React from "react";
const SvgAudiojackstereoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.352 2.445h2.65V.905c0-.53-.36-.9-.89-.9h-.87c-.52 0-.89.37-.89.9Zm0 3.63h2.65v-2.2h-2.65Zm0 6.85h2.65v-5.42h-2.65Zm.11 15.08h2.44v-4.2c1.43-.51 2.46-1.88 2.46-3.47v-4.96c0-.52-.37-.89-.89-.89H.912c-.54 0-.91.37-.91.89v4.96c0 1.59 1.02 2.95 2.46 3.47Z" />
  </svg>
);
export default SvgAudiojackstereoBold;
