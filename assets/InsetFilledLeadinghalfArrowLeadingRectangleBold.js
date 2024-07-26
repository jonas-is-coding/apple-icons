import * as React from "react";
const SvgInsetfilledleadinghalfarrowleadingrectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm1.2-1.9h7.6c.53 0 .74-.22.74-.76V5.682c0-.54-.21-.76-.74-.76h-7.6c-.53 0-.74.22-.74.76v11.04c0 .54.21.76.74.76m17.37-6.28a.893.893 0 0 0-.91-.93h-2.5l-1.21.06.5-.49 1.08-.98c.18-.14.27-.39.27-.6 0-.5-.36-.87-.84-.87-.24 0-.44.11-.6.28l-2.7 2.85c-.22.24-.3.43-.3.68 0 .24.08.43.3.67l2.7 2.85c.16.17.36.28.6.28.48 0 .84-.38.84-.86a.82.82 0 0 0-.27-.61l-1.08-.98-.5-.48 1.21.06h2.5c.52 0 .91-.4.91-.93" />
  </svg>
);
export default SvgInsetfilledleadinghalfarrowleadingrectangleBold;
