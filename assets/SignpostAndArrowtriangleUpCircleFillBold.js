import * as React from "react";
const SvgSignpostandarrowtriangleupcirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.81-12.12v-3.95c0-.96.56-1.5 1.51-1.5h3.49v-.93c0-.43.38-.79.81-.79.45 0 .81.36.81.79v.93h3.48c.96 0 1.53.54 1.53 1.5v3.95c0 .96-.57 1.51-1.53 1.51h-3.48v3.54h1.64c.44 0 .8.36.8.8 0 .43-.38.78-.8.78h-4.88c-.45 0-.8-.35-.8-.78 0-.44.35-.8.8-.8h1.62v-3.54h-3.49c-.95 0-1.51-.55-1.51-1.51m3.97-1.34c-.28.39-.14.76.32.76h3.06c.44 0 .58-.37.3-.76l-1.44-1.99c-.21-.32-.57-.3-.8 0Z" />
  </svg>
);
export default SvgSignpostandarrowtriangleupcirclefillBold;
