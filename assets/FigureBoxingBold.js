import * as React from "react";
const SvgFigureboxingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.352 5.517a2.76 2.76 0 1 0 0-5.52c-1.52 0-2.75 1.25-2.75 2.76 0 1.52 1.23 2.76 2.75 2.76M.482 29.087c.57.49 1.43.46 1.96-.13l4.3-4.91c.23-.28.38-.6.42-.97l.49-4.84c.02-.25.28-.33.43-.14l3.14 3.62v6.34c0 .75.63 1.38 1.39 1.38.75 0 1.39-.63 1.39-1.38v-6.8c0-.39-.13-.64-.29-.88l-3.62-5.31 1.76-5.27c.08-.23.2-.29.44-.29h7.77a2.04 2.04 0 0 0 1.89 1.26c1.1 0 2-.9 2-2.04 0-1.1-.9-2-1.99-2H7.422c-1.05 0-1.91.3-2.76 1.15l-2.38 2.39c-.88.89-.39 2.35.84 2.35h2.05l-.43 1.28c-.25.78-.37 1.6-.37 2.38v6.27l-4.02 4.59c-.52.58-.46 1.45.13 1.95" />
  </svg>
);
export default SvgFigureboxingBold;
