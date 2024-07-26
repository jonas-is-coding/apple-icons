import * as React from "react";
const SvgArrowcounterclockwiseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.332 15.294c0-5.9-4.77-10.66-10.67-10.66-.38 0-.76.04-1.09.1l2.33-2.25c.26-.26.41-.57.41-.98 0-.84-.64-1.5-1.45-1.5-.41 0-.76.15-1.02.43l-4.79 4.87c-.29.31-.47.68-.47 1.09 0 .43.15.78.47 1.09l4.79 4.86c.27.25.6.39 1.01.39.82 0 1.46-.64 1.46-1.46 0-.41-.15-.72-.41-.97l-2.57-2.55c.38-.08.84-.11 1.33-.11a7.65 7.65 0 0 1 7.65 7.65c0 4.22-3.43 7.64-7.65 7.64s-7.65-3.42-7.65-7.64c0-.93-.61-1.56-1.48-1.56-.9 0-1.53.63-1.53 1.56 0 5.89 4.77 10.66 10.66 10.66 5.9 0 10.67-4.77 10.67-10.66" />
  </svg>
);
export default SvgArrowcounterclockwiseBold;
