import * as React from "react";
const SvgTraycirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.9-7.45c-1.32 0-2.05-.71-2.05-2.03v-3.33c0-.82.11-1.17.5-1.64l1.85-2.32c.79-.98 1.16-1.28 2.25-1.28h4.72c1.09 0 1.45.3 2.25 1.28l1.85 2.32c.4.47.49.82.49 1.64v3.33c0 1.32-.71 2.03-2.04 2.03Zm-.03-5.89h3.02c.34 0 .51.26.51.53v.14c0 .81.54 1.3 1.41 1.3s1.42-.49 1.42-1.3v-.14c0-.27.17-.53.49-.53h3.03c.23 0 .28-.21.17-.35l-2.07-2.59c-.19-.26-.41-.38-.74-.38h-4.59c-.33 0-.55.11-.75.38l-2.05 2.59c-.12.15-.09.35.15.35" />
  </svg>
);
export default SvgTraycirclefillBold;
