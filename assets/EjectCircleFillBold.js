import * as React from "react";
const SvgEjectcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.83-12.29c-.62 0-1-.39-1.01-.95-.02-.26.12-.56.37-.78l4.38-4.37c.42-.38.72-.58 1.09-.58.38 0 .67.18 1.09.58l4.37 4.37c.25.22.4.52.4.78 0 .56-.42.95-1.03.95Zm.23 4.98c-.76 0-1.23-.42-1.23-1.21v-1.16c0-.72.47-1.19 1.23-1.19h9.22c.76 0 1.23.47 1.23 1.19v1.16c0 .79-.47 1.21-1.23 1.21Z" />
  </svg>
);
export default SvgEjectcirclefillBold;
