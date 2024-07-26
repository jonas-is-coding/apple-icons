import * as React from "react";
const SvgVideoslashcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.62-3.7c.27.24.7.26.96 0a.67.67 0 0 0 0-.96L7.742 6.796a.68.68 0 0 0-.97 0c-.26.26-.26.69 0 .95Zm-1.64-4.78v-3.38c0-1.18-.66-1.86-1.9-1.86h-3.34Zm-9.34-3.38v5.23c0 1.19.69 1.8 1.92 1.8h5.49c.41 0 .73-.08 1-.23l-8-8c-.27.29-.41.7-.41 1.2m10 .85v3.05l1.8 1.61c.26.25.52.38.77.38.46 0 .79-.32.79-.82v-5.29c0-.5-.33-.82-.79-.82-.25 0-.51.15-.77.37Z" />
  </svg>
);
export default SvgVideoslashcircleBold;
