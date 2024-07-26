import * as React from "react";
const SvgSliderhorizontalbelowsquareandsquarefilledBold = ({
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
    <path d="M11.822 15.097c2.04 0 3.31-1.26 3.31-3.27v-8.57c0-2-1.27-3.26-3.31-3.26h-8.51c-2.03 0-3.31 1.26-3.31 3.26v8.57c0 2.01 1.28 3.27 3.31 3.27Zm17.02-.17c1.98 0 3.23-1.22 3.23-3.2v-8.38c0-1.96-1.25-3.19-3.23-3.19h-8.33c-2 0-3.25 1.23-3.25 3.19v8.38c0 1.97 1.25 3.2 3.25 3.2Zm-17.53-2.84h-7.48c-.54 0-.81-.3-.81-.83v-7.42c0-.54.27-.83.81-.83h7.48c.52 0 .81.29.81.83v7.42c0 .53-.29.83-.81.83m-9.96 6.99c-.75 0-1.35.63-1.35 1.41 0 .76.61 1.42 1.35 1.42h3.2a3.43 3.43 0 0 0 3.12 2.02c1.4 0 2.59-.84 3.13-2.02h19.89c.77 0 1.38-.67 1.38-1.42 0-.76-.61-1.41-1.38-1.41h-19.89a3.44 3.44 0 0 0-3.13-2.03c-1.39 0-2.59.84-3.12 2.03Zm6.32 2.97c-.87 0-1.54-.71-1.54-1.56 0-.88.67-1.55 1.54-1.55.86 0 1.55.67 1.55 1.55 0 .85-.69 1.56-1.55 1.56" />
  </svg>
);
export default SvgSliderhorizontalbelowsquareandsquarefilledBold;
