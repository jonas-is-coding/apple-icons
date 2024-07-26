import * as React from "react";
const SvgSignpostrightandleftcirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.01-13.77c-.58 0-.94-.37-.94-.94v-2.37c0-.58.36-.95.95-.95h1.19v-.82c0-.43.37-.79.8-.79.45 0 .81.36.81.79v.82h2.93c.35 0 .6.11.82.32l1.19 1.17c.47.45.47.86.02 1.29l-1.21 1.15c-.22.23-.48.33-.82.33h-2.93v.86h1.17c.58 0 .95.35.95.93v2.38c0 .56-.37.92-.95.92h-1.17v1.62h1.39c.45 0 .81.36.81.81 0 .43-.36.78-.81.78h-4.4c-.44 0-.8-.35-.8-.78 0-.46.36-.81.8-.81h1.4v-1.62h-2.95c-.35 0-.6-.09-.82-.31l-1.21-1.15c-.45-.45-.45-.86 0-1.29l1.21-1.16c.22-.23.47-.32.82-.32h2.95v-.86Z" />
  </svg>
);
export default SvgSignpostrightandleftcirclefillBold;
