import * as React from "react";
const SvgPersoncropsquareonsquareangledfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.315 19.21c.35 1.96 1.47 3.02 3.2 3.08v-11.8c0-3.47 2.18-5.62 5.63-5.62h9.18l-.31-1.76c-.42-2.37-1.95-3.44-4.33-3.02L3.135 2.3c-2.38.42-3.46 1.95-3.05 4.31Zm8.83 7.79h12.76c2.42 0 3.74-1.32 3.74-3.72V10.49c0-2.4-1.32-3.71-3.74-3.71h-12.76c-2.4 0-3.74 1.31-3.74 3.71v12.79c0 2.4 1.34 3.72 3.74 3.72m6.39-8.11c-2.02 0-3.56-1.7-3.56-3.88 0-2.07 1.57-3.82 3.56-3.82 1.98 0 3.55 1.75 3.55 3.82 0 2.18-1.55 3.88-3.55 3.88m-6.46 5.36c.93-2.17 3.46-3.72 6.46-3.72 2.99 0 5.52 1.55 6.44 3.72Z" />
  </svg>
);
export default SvgPersoncropsquareonsquareangledfillBold;
