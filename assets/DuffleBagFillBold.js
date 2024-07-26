import * as React from "react";
const SvgDufflebagfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M31.652 26.258c2.67 0 4.5-1.8 4.5-4.44v-7.37c0-3.94-2.8-6.71-6.78-6.71h-.53v18.52Zm-17.05-18.52v6.95h6.96v-6.95Zm0 9.22v9.3h6.96v-9.3Zm-2.27 9.3V5.738c0-1.88 1.41-3 3.84-3h3.81c2.42 0 3.85 1.12 3.85 3v20.52h2.73V5.738c0-3.52-2.56-5.74-6.58-5.74h-3.81c-4.01 0-6.59 2.22-6.59 5.74v20.52Zm-7.83 0h2.81V7.738h-.51c-3.99 0-6.8 2.77-6.8 6.71v7.37c0 2.64 1.83 4.44 4.5 4.44" />
  </svg>
);
export default SvgDufflebagfillBold;
