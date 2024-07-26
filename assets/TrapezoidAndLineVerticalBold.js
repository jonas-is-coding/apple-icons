import * as React from "react";
const SvgTrapezoidandlineverticalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.133 20.617c-.55 2.41.67 3.97 3.2 3.97h7.3v3.25c0 .92.68 1.52 1.52 1.52.82 0 1.5-.6 1.5-1.52v-3.25h7.3c2.53 0 3.75-1.56 3.2-3.97l-2.92-12.58c-.47-2.1-1.72-3.27-3.93-3.27h-3.65v-3.24c0-.93-.68-1.53-1.5-1.53-.84 0-1.52.6-1.52 1.53v3.24h-3.64c-2.22 0-3.46 1.17-3.94 3.27Zm3.08-.26 2.68-11.68c.16-.65.57-.99 1.25-.99h3.49v13.95h-6.48c-.76 0-1.12-.5-.94-1.28m13.93-12.67c.68 0 1.09.34 1.25.99l2.69 11.68c.18.78-.19 1.28-.95 1.28h-6.48V7.687Z" />
  </svg>
);
export default SvgTrapezoidandlineverticalBold;
