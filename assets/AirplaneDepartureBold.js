import * as React from "react";
const SvgAirplanedepartureBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m6.993 13.462 20.18-5.39c2.47-.66 4.14-2.5 3.51-4.27-.6-1.61-2.98-2.11-5.17-1.36l-7.17 2.45c-.46.15-.76.14-1.31-.12L7.262.162c-.38-.17-.8-.21-1.17-.1l-.84.26c-.44.14-.56.67-.2 1.05l5.72 6.11-3.45 1.17-5.55-1.97c-.41-.14-.78-.06-1.15.28l-.36.33c-.33.29-.34.72-.06 1.03l4.1 4.6c.61.7 1.53.85 2.69.54m-4.53 8.5h25.59c.84 0 1.51-.68 1.51-1.51s-.67-1.51-1.51-1.51H2.462c-.83 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51" />
  </svg>
);
export default SvgAirplanedepartureBold;
