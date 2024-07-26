import * as React from "react";
const SvgSpeakerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.963 16.115h3.26c.08 0 .15.02.22.08l4.9 4.38c.69.62 1.23.92 1.93.92 1.06 0 1.86-.8 1.86-1.84V1.875c0-1.04-.8-1.88-1.87-1.88-.68 0-1.18.3-1.92.95l-4.9 4.35c-.07.07-.14.1-.22.1h-3.26c-1.94 0-2.96 1.06-2.96 3.09v4.53c0 2.04 1.02 3.1 2.96 3.1m.4-2.7c-.32 0-.48-.16-.48-.47v-4.38q0-.48.48-.48h3.52c.34 0 .58-.07.85-.33l4.16-3.79c.05-.05.11-.09.18-.09.09 0 .16.07.16.18v13.38c0 .11-.07.19-.16.19-.06 0-.12-.04-.18-.08l-4.16-3.8c-.27-.25-.51-.33-.85-.33Z" />
  </svg>
);
export default SvgSpeakerBold;
