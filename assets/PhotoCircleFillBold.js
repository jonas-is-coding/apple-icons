import * as React from "react";
const SvgPhotocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.74-6.97c-1.28 0-2-.7-2-1.96v-6.83c0-1.28.72-1.97 2-1.97h9.48c1.29 0 1.98.69 1.98 1.97v6.83c0 1.26-.69 1.96-1.98 1.96Zm2.68-5.31a1.421 1.421 0 0 0 0-2.84c-.78 0-1.43.64-1.43 1.41 0 .79.65 1.43 1.43 1.43m-2.47 3.79h9.06c.39 0 .66-.26.66-.67v-1.2l-2.15-1.98c-.25-.22-.56-.35-.87-.34-.3-.01-.61.11-.88.34l-2.6 2.34-1.08-.95c-.23-.21-.51-.33-.78-.33s-.51.12-.74.33l-1.29 1.1v.69c0 .41.25.67.67.67" />
  </svg>
);
export default SvgPhotocirclefillBold;
