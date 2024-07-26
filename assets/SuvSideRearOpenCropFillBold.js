import * as React from "react";
const SvgSuvsiderearopencropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 3.825v19.69h5.75c-.09-.43-.15-.89-.15-1.34 0-3.18 2.6-5.77 5.78-5.77a5.77 5.77 0 0 1 5.76 5.77c0 .45-.06.91-.16 1.34h1.29c2.48 0 3.84-1.46 3.84-4.12v-5.97c0-1.77-.65-3.82-1.76-5.41l-.61-.87c-.45-.66-.94-1.22-1.48-1.67l2.46-2.49c.31-.33.61-.47 1.12-.47h1.92c.79 0 1.29-.52 1.29-1.26s-.51-1.26-1.29-1.26h-1.88c-1.4 0-2.16.33-2.94 1.12l-3.05 3.08c-.9-.28-1.92-.4-3.11-.4H2.032c-.73 0-1.41.01-2.03.03m11.38 22.54c2.31 0 4.19-1.87 4.19-4.19s-1.88-4.21-4.19-4.21c-2.32 0-4.22 1.89-4.22 4.21s1.9 4.19 4.22 4.19" />
  </svg>
);
export default SvgSuvsiderearopencropfillBold;
