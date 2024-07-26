import * as React from "react";
const SvgHumidifierfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.192 5.594h14.29c-.86-1.28-1.79-2.58-2.77-3.87-.83-1.09-1.38-1.72-2.9-1.72h-2.94c-1.53 0-2.07.63-2.9 1.72-.98 1.29-1.92 2.59-2.78 3.87m7.16 6.68c1.53 0 2.8.91 3.31 2.23h7.99c-.3-1.89-1.22-4.03-2.51-6.28H2.532c-1.29 2.25-2.2 4.39-2.5 6.28h8.02c.5-1.32 1.78-2.23 3.3-2.23m0 5.01c.82 0 1.47-.64 1.47-1.46 0-.81-.65-1.47-1.47-1.47-.8 0-1.45.66-1.45 1.47 0 .82.65 1.46 1.45 1.46m-2.91 6.6h5.8c5.12 0 7.97-2.46 8.43-6.73h-8.01c-.51 1.3-1.78 2.22-3.31 2.22-1.51 0-2.79-.92-3.3-2.22H.002c.47 4.27 3.33 6.73 8.44 6.73" />
  </svg>
);
export default SvgHumidifierfillBold;
