import * as React from "react";
const SvgSpeakerslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m5.15-6.22L6.212 7.244a.743.743 0 0 1 0-1.02c.29-.28.75-.28 1.03 0l11.3 11.3c.28.28.28.73 0 1.01-.28.29-.74.27-1.02 0m-5.82-9.32 1.69-1.57c.35-.32.6-.45.93-.45.48 0 .87.39.87.88v4.63Zm-2.32 5.68c-.92 0-1.44-.53-1.44-1.49v-2.05c0-.28.1-.53.21-.69h.04l6.56 6.56-.07.21a.5.5 0 0 1-.36.13c-.33 0-.6-.14-.93-.42l-2.36-2.21c-.03-.03-.06-.04-.12-.04Z" />
  </svg>
);
export default SvgSpeakerslashcirclefillBold;
