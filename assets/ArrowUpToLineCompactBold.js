import * as React from "react";
const SvgArrowuptolinecompactBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.082 21.626c1.02 0 1.7-.71 1.7-1.76v-9.26l-.16-2.4 2.42 2.7 2.03 2c.3.3.7.54 1.22.54.92 0 1.61-.68 1.61-1.68 0-.42-.17-.84-.53-1.2l-7.04-6.8c-.24-.25-.57-.43-.93-.5h7.13c.93 0 1.63-.71 1.63-1.64 0-.91-.7-1.63-1.63-1.63H1.622c-.92 0-1.62.72-1.62 1.63 0 .93.7 1.64 1.62 1.64h7.13c-.35.07-.68.25-.92.5l-7.02 6.8c-.37.36-.54.78-.54 1.2 0 1 .69 1.68 1.62 1.68.5 0 .9-.23 1.21-.54l2.02-2 2.43-2.7-.17 2.4v9.26c0 1.05.68 1.76 1.7 1.76" />
  </svg>
);
export default SvgArrowuptolinecompactBold;
