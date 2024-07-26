import * as React from "react";
const SvgMusicmicrophoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15.653 1.681 7.07 7.06c2.11-2.07 2.32-4.99.13-7.19-2.21-2.18-5.12-1.99-7.2.13m-3.17 23.04c.77 0 1.38-.6 1.39-1.37l.04-8.36 3.38-3.15c1.4.1 2.84-.48 4.01-1.69l-7.07-7.05c-1.19 1.17-1.77 2.59-1.66 4l-10.85 11.64c-.51.55-.53 1.21.07 1.93l-1.63 2.07c-.25.31-.21.76.09 1.06l.34.34c.32.32.75.35 1.1.09l2.03-1.63c.73.59 1.38.57 1.94.07l5.43-5.07v5.75c0 .77.61 1.37 1.39 1.37m-8.93-4.9 9.91-10.33c.18.27.39.54.63.8.25.26.52.48.79.66l-10.3 9.9Z" />
  </svg>
);
export default SvgMusicmicrophoneBold;
