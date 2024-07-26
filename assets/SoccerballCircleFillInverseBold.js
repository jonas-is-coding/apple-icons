import * as React from "react";
const SvgSoccerballcirclefillinverseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.03c-3.5 0-6.33-2.84-6.33-6.34 0-3.49 2.83-6.33 6.33-6.33a6.336 6.336 0 1 1 0 12.67m-4.02-9.53.43 1.4 1.76.71 1.25-.95v-1.86l-1.15-.93c-.9.33-1.69.9-2.29 1.63m8.05 0c-.58-.73-1.37-1.3-2.28-1.63l-1.14.9v1.89l1.24.95 1.77-.71Zm-8.3 5.99 1.57-.02.99-1.3-.46-1.39-1.8-.74-1.15.65c.01 1.04.32 1.99.85 2.8m8.56.01c.53-.8.85-1.77.85-2.81l-1.14-.65-1.82.74-.45 1.4.99 1.31Zm-4.28 2.3c.5 0 .99-.07 1.45-.2l.31-1.38-.92-1.21h-1.69l-.92 1.17.33 1.42c.45.13.95.2 1.44.2" />
  </svg>
);
export default SvgSoccerballcirclefillinverseBold;
