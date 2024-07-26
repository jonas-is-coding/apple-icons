import * as React from "react";
const SvgChartbarhorizontalpagefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm5.19-17.28h6.78c.56 0 .93.36.93.93v1.69c0 .56-.37.92-.93.92h-6.78c-.55 0-.91-.36-.91-.92v-1.69c0-.57.36-.93.91-.93m0 4.46h10.41c.55 0 .9.38.9.94v1.69c0 .57-.35.94-.9.94H5.192c-.55 0-.91-.37-.91-.94v-1.69c0-.56.36-.94.91-.94m0 4.49h8.43c.55 0 .9.35.9.92v1.71c0 .56-.35.92-.9.92h-8.43c-.55 0-.91-.36-.91-.92v-1.71c0-.57.36-.92.91-.92m0 4.48h5.18c.55 0 .93.36.93.92v1.7c0 .57-.38.93-.93.93h-5.18c-.55 0-.91-.36-.91-.93v-1.7c0-.56.36-.92.91-.92" />
  </svg>
);
export default SvgChartbarhorizontalpagefillBold;
