import * as React from "react";
const SvgRectangleonrectangleslashcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.29-6.41L6.542 7.226a.7.7 0 0 1 0-1c.28-.3.75-.3 1.02 0l11.11 11.11c.29.27.29.72 0 1-.27.3-.73.29-1.01 0m-6.46-9.95-1.71-1.71h5.31c1.12 0 1.73.6 1.73 1.64v.07Zm-5.59 5.32v-4.92c0-.33.05-.62.15-.85l1.91 1.9c-.15.27-.22.59-.22.99v4.61h-.14c-1.09 0-1.7-.6-1.7-1.73m13.5 2.59-7.11-7.1h5.45c1.11 0 1.72.6 1.72 1.71v4.72c0 .24-.01.46-.06.67m-9.13 1.68c-1.12 0-1.73-.6-1.73-1.72v-5.02c0-.27.03-.5.11-.7l7.47 7.44Z" />
  </svg>
);
export default SvgRectangleonrectangleslashcirclefillBold;
