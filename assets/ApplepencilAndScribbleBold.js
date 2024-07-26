import * as React from "react";
const SvgApplepencilandscribbleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m14.56 15.261 2.2 2.22.87-.47 13.88-13.86c.73-.73.72-1.9-.01-2.6-.71-.73-1.89-.73-2.59-.02l-13.9 13.87Zm-14.3.78c-1.07 2.6 1.37 3.93 3.5 2.41.64-.47 1.27-.92 1.92-1.4-.34.8-.5 1.57-.5 2.25 0 3.03 3.14 4.62 6.45 2.9 1.07-.55.61-3.02-1.26-2.17-1.77.79-2.81.45-2.81-.9 0-1.36 1.09-3.77 3.53-7 .99-1.3-.65-3.01-2.01-1.57-1.6 1.68-3.79 3.37-5.88 5.06l5.04-12.26c.51-1.28-1.77-2.42-2.47-.71Zm12.58 2.35c-.25.49.32 1 .74.78l1.99-1.07-1.66-1.66Z" />
  </svg>
);
export default SvgApplepencilandscribbleBold;
