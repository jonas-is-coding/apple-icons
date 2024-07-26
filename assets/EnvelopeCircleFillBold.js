import * as React from "react";
const SvgEnvelopecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m0-11.96c-.15 0-.3-.06-.47-.21l-5.57-4.96c.3-.16.63-.23 1.06-.23h9.97c.43 0 .75.07 1.07.23l-5.59 4.96c-.16.15-.3.21-.47.21m-6.79 3.47c-.09-.22-.13-.48-.13-.82v-6.13c0-.35.06-.65.14-.82l4.11 3.66Zm13.6 0-4.14-4.11 4.13-3.66c.07.18.13.47.13.82v6.13c0 .33-.05.6-.12.82m-11.89 1.1c-.4 0-.73-.08-.98-.22l4.25-4.23.68.6c.37.34.72.47 1.13.47s.78-.13 1.15-.47l.67-.6 4.25 4.23c-.25.14-.58.22-.98.22Z" />
  </svg>
);
export default SvgEnvelopecirclefillBold;
