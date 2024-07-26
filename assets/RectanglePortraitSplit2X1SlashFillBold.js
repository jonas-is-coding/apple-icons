import * as React from "react";
const SvgRectangleportraitsplit2X1SlashfillBold = ({
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
    <path d="m3.444.622 7.16 7.15V.002h-4.77c-.98 0-1.78.21-2.39.62m10.18 10.17 8.88 8.88V4.142c0-2.68-1.46-4.14-4.12-4.14h-4.76Zm8.92 13.94c.4.37 1.02.38 1.4 0 .37-.39.38-1.02 0-1.41L1.684 1.082a.975.975 0 0 0-1.4 0c-.38.36-.38 1.02 0 1.39ZM1.724 6.142v15.51c0 2.69 1.45 4.14 4.11 4.14h4.77v-10.77Zm11.9 11.91v7.74h4.76c.98 0 1.77-.2 2.38-.61Z" />
  </svg>
);
export default SvgRectangleportraitsplit2X1SlashfillBold;
