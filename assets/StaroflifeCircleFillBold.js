import * as React from "react";
const SvgStaroflifecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.53-15.38.18-.29c.4-.76.76-.86 1.53-.42l2.5 1.47v-2.94c0-.82.27-1.09 1.16-1.09h.34c.88 0 1.15.27 1.15 1.09v2.94l2.49-1.47c.76-.46 1.13-.34 1.54.42l.17.29c.43.75.32 1.11-.42 1.52l-2.62 1.43 2.63 1.5c.71.41.8.75.39 1.53l-.16.29c-.41.76-.78.86-1.52.41l-2.5-1.48v2.97c0 .84-.27 1.11-1.15 1.11h-.34c-.89 0-1.17-.27-1.16-1.1v-2.98l-2.51 1.48c-.73.43-1.08.34-1.51-.41l-.17-.29c-.43-.76-.33-1.12.4-1.53l2.63-1.5-2.63-1.43c-.73-.39-.83-.76-.42-1.52" />
  </svg>
);
export default SvgStaroflifecirclefillBold;
