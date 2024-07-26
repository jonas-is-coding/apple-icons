import * as React from "react";
const SvgArrowtriangleheadmergeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.382 20.026c.38 0 .79-.13 1.15-.37l.6-.4c1.5-.99 3.69-3.24 4.34-4.47h.05c.63 1.23 2.83 3.47 4.35 4.47l.6.4c.36.24.76.35 1.15.35.87 0 1.38-.59 1.38-1.37 0-.47-.26-.94-.7-1.22l-.95-.61c-1.68-1.07-4.45-3.82-4.45-6.14v-4.19h1.93c.99 0 1.29-.82.66-1.68L8.402.506c-.5-.68-1.3-.68-1.8 0l-3.1 4.28c-.63.86-.35 1.69.67 1.69h1.91v4.19c0 2.32-2.78 5.05-4.44 6.14l-.95.63c-.45.26-.69.73-.69 1.21 0 .73.48 1.38 1.38 1.38" />
  </svg>
);
export default SvgArrowtriangleheadmergeBold;
