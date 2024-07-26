import * as React from "react";
const SvgYieldsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55-.004C1.41-.004 0 1.626 0 3.566c0 .59.15 1.2.48 1.78l9.02 15.76a3.51 3.51 0 0 0 3.07 1.78c1.2 0 2.37-.59 3.06-1.78l9.03-15.76c.33-.58.48-1.19.48-1.78 0-1.94-1.41-3.57-3.55-3.57Zm.54 2.87h16.96c.58 0 .96.46.96.99 0 .15-.04.34-.13.51l-8.5 14.95c-.17.3-.49.44-.81.44-.31 0-.65-.13-.83-.44L3.26 4.396c-.1-.18-.13-.39-.13-.54 0-.53.37-.99.96-.99m2.45 1.83c-.46 0-.75.46-.5.87l6.02 10.58c.23.42.77.42 1.01 0l6.02-10.58c.23-.41-.03-.87-.5-.87Z" />
  </svg>
);
export default SvgYieldsignBold;
