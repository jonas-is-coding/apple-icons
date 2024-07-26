import * as React from "react";
const SvgCarseatrightupanddownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.601 20.667c1.06-3.82-1.67-5.57-8.45-5.57-2.91 0-5.82.24-8.23.66.56-4.38-.73-7.99-3.63-10.03.34-3.25-1.75-5.73-4.28-5.73-2.12 0-3.54 1.73-2.82 4.61l4.55 18.42c.48 1.96 1.76 3 3.68 3h14.29c2.61 0 3.76-1.25 4.89-5.36m-6.55-7.3c.83 0 1.19-.73.77-1.43l-2.63-4.37c-.39-.66-1.26-.65-1.66 0l-2.63 4.37c-.42.71-.04 1.43.78 1.43Zm0 14.38h-5.37c-.82 0-1.2.73-.78 1.43l2.64 4.37c.39.66 1.26.68 1.67 0l2.61-4.37c.42-.69.06-1.43-.77-1.43" />
  </svg>
);
export default SvgCarseatrightupanddownfillBold;
