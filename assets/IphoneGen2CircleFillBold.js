import * as React from "react";
const SvgIphonegen2CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.63-4.76c-1.22 0-2.09-.82-2.09-2.01V6.764c0-1.19.87-2.01 2.09-2.01h5.27c1.22 0 2.07.82 2.07 2.01v11.22c0 1.19-.85 2.01-2.07 2.01Zm.18-1.7h4.9c.47 0 .74-.27.74-.72v-10.4c0-.45-.27-.73-.74-.73h-.91c-.1 0-.14.05-.14.15v.19c0 .32-.21.52-.51.52h-1.78c-.3 0-.5-.2-.5-.52v-.19c0-.1-.05-.15-.14-.15h-.92c-.47 0-.73.27-.73.72v10.43c0 .44.26.7.73.7m.96-.54c-.21 0-.37-.14-.37-.35 0-.25.16-.39.37-.39h2.98c.21 0 .38.14.38.39 0 .21-.17.35-.38.35Z" />
  </svg>
);
export default SvgIphonegen2CirclefillBold;
