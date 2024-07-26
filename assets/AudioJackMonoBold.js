import * as React from "react";
const SvgAudiojackmonoBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.352 2.765h2.65V.905c0-.53-.36-.9-.89-.9h-.87c-.52 0-.89.37-.89.9Zm0 7.79h2.65v-6.29h-2.65Zm.11 17.45h2.44v-4.79a3.67 3.67 0 0 0 2.46-3.46v-6.75c0-.51-.37-.88-.89-.88H.912c-.54 0-.91.37-.91.88v6.75c0 1.6 1.02 2.96 2.46 3.46Z" />
  </svg>
);
export default SvgAudiojackmonoBold;
