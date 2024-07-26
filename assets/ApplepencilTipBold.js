import * as React from "react";
const SvgApplepenciltipBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.423 8.703h8.14L7.733.893c-.2-.57-.62-.89-1.23-.89-.62 0-1.05.32-1.25.89Zm-1.11 15.61c.7 0 1.27-.51 1.3-1.3l.27-5.27 1.15-4.79h4.96l1.13 4.79.28 5.27c.04.79.59 1.3 1.31 1.3.7 0 1.34-.55 1.31-1.4l-.27-5.29c0-.15-.03-.31-.06-.48l-1.54-5.95a.93.93 0 0 0-.92-.72h-7.45c-.45 0-.81.28-.93.72l-1.52 5.95c-.05.17-.06.33-.07.48l-.26 5.29c-.04.85.61 1.4 1.31 1.4" />
  </svg>
);
export default SvgApplepenciltipBold;
