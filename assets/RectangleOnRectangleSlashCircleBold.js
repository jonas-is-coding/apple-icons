import * as React from "react";
const SvgRectangleonrectangleslashcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m5.03-3.64c.27.26.69.27.96 0 .26-.26.26-.69 0-.96L7.802 6.516a.67.67 0 0 0-.96 0c-.27.26-.27.69 0 .95Zm-6.15-9.45h5.07v-.06c0-.99-.56-1.56-1.64-1.56h-5.05Zm-5.3 5.06c0 1.06.58 1.63 1.61 1.63h.15v-4.38c0-.39.07-.7.21-.95l-1.82-1.8c-.1.22-.15.49-.15.82Zm12.82 2.47c.04-.2.06-.43.06-.66v-4.48c0-1.05-.57-1.63-1.64-1.63h-5.18Zm-8.67 1.57h5.57l-7.09-7.08c-.09.19-.12.41-.12.68v4.77c0 1.06.56 1.63 1.64 1.63" />
  </svg>
);
export default SvgRectangleonrectangleslashcircleBold;
