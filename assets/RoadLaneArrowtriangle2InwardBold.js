import * as React from "react";
const SvgRoadlanearrowtriangle2InwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M33.782 18.657h1.59c1.2 0 1.57-.99 1.13-1.82L28.292.747c-.26-.49-.67-.75-1.17-.75h-.84c-.64 0-.96.58-.71 1.19l6.61 16.39c.24.62.7 1.08 1.6 1.08m-27.65 0h1.58c.89 0 1.36-.46 1.6-1.08l6.61-16.38c.25-.62-.08-1.19-.72-1.19h-.82c-.51 0-.92.25-1.16.75l-8.23 16.08c-.43.85-.07 1.82 1.14 1.82m-4.69-8.11 4.36-2.63c.68-.39.66-1.26 0-1.66l-4.37-2.62c-.71-.44-1.43-.05-1.43.77v5.37c0 .83.74 1.19 1.44.77m38.61 0c.71.41 1.43.06 1.43-.77v-5.37c0-.82-.71-1.2-1.43-.77l-4.37 2.62c-.65.4-.67 1.27 0 1.66Z" />
  </svg>
);
export default SvgRoadlanearrowtriangle2InwardBold;
