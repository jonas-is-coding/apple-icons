import * as React from "react";
const SvgArrowuturndowncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.767c6.83 0 12.38-5.56 12.38-12.39s-5.55-12.38-12.38-12.38S.002 5.547.002 12.377s5.54 12.39 12.37 12.39m1.24-18.72c2.93 0 4.87 1.97 4.87 4.92v1.72c0 .73-.46 1.22-1.13 1.22-.65 0-1.09-.49-1.09-1.22v-1.72c0-1.6-1.05-2.67-2.65-2.67-1.52 0-2.55 1.07-2.55 2.68v3.5l-.07.97.42-.62 1.14-1.3c.19-.21.44-.33.71-.33.59 0 1.08.48 1.08 1.04 0 .28-.1.55-.3.75l-3.28 3.24c-.24.22-.52.34-.8.34-.29 0-.58-.13-.8-.34l-3.27-3.24c-.21-.2-.3-.44-.3-.72 0-.57.49-1.06 1.05-1.06.27 0 .54.11.73.32l1.08 1.17.56.75-.08-.97v-3.5c0-2.96 1.87-4.93 4.68-4.93" />
  </svg>
);
export default SvgArrowuturndowncirclefillBold;
