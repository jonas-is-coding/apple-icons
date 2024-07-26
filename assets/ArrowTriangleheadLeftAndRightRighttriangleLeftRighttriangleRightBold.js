import * as React from "react";
const SvgArrowtriangleheadleftandrightrighttriangleleftrighttrianglerightBold =
  ({ title, titleId, ...props }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M6.852 5.904v-1.5h15.92v1.5c0 .93.83 1.22 1.57.66l3.28-2.47c.52-.38.5-.95 0-1.32l-3.28-2.49c-.74-.56-1.57-.28-1.57.69v1.46H6.852V.974c0-.97-.82-1.25-1.57-.69l-3.28 2.49c-.49.37-.5.95 0 1.32l3.28 2.47c.74.56 1.57.27 1.57-.66m-4.63 21.47h9.32c1.68 0 2.49-.82 2.49-2.49v-13.64c0-1.61-1.18-2.52-2.45-2.52-.89 0-1.83.43-2.42 1.41l-8.66 13.6c-.31.52-.5 1-.5 1.6 0 1.16.72 2.04 2.22 2.04m25.19 0c1.5 0 2.23-.88 2.23-2.04 0-.6-.19-1.08-.52-1.6l-8.65-13.6c-.6-.98-1.52-1.41-2.41-1.41-1.29 0-2.46.91-2.46 2.52v13.64c0 1.67.82 2.49 2.49 2.49Zm-23.31-2.9c-.28 0-.32-.27-.21-.43l7.07-11.19c.05-.11.16-.09.16.03v11.24c0 .23-.12.35-.35.35Zm21.43 0h-6.66c-.24 0-.37-.12-.37-.35v-11.24c0-.12.12-.14.18-.03l7.05 11.19c.11.16.07.43-.2.43" />
    </svg>
  );
export default SvgArrowtriangleheadleftandrightrighttriangleleftrighttrianglerightBold;
