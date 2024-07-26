import * as React from "react";
const SvgMovieclapperBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.191 9.635.97 3.57v9.76c0 2.46 1.36 3.82 3.84 3.82h18.3c2.49 0 3.85-1.36 3.85-3.82v-11.54c0-1.32-.83-2.16-2.18-2.16h-8.65l7.87-2.11c1.29-.34 1.87-1.38 1.54-2.66l-.46-1.73c-.61-2.31-2.34-3.2-4.68-2.57l-17.68 4.76c-2.38.65-3.36 2.3-2.72 4.68m17.22-2.62.79-3.35 2.25-.62c.27-.07.51-.14.78-.2l-.77 3.35Zm-6.57 1.76.79-3.36 3.19-.85-.79 3.37Zm-6.42 1.72.79-3.35 3.04-.83-.77 3.38Zm.6 4.89 1.72-3.07 2.52-.07h.67l-1.76 3.14Zm6.65 0 1.76-3.14h3.29l-1.76 3.14Zm6.8 0 1.76-3.14h3.14l-1.76 3.14Zm-14.52 7.24v-5h20.4v5c0 .93-.47 1.36-1.35 1.36H5.311c-.89 0-1.36-.43-1.36-1.36" />
  </svg>
);
export default SvgMovieclapperBold;
