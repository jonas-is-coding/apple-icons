import * as React from "react";
const SvgSpeakerslashcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.89-3.43c.27.24.7.26.96 0a.67.67 0 0 0 0-.96L7.492 6.526a.694.694 0 0 0-.98 0 .67.67 0 0 0 0 .96Zm-5.54-8.86 3.31 3.33v-4.43c0-.46-.36-.82-.82-.82-.31 0-.54.13-.86.42Zm-2.21 5.38h1.47c.05 0 .08.01.1.03l2.27 2.11c.3.27.55.41.86.41.14 0 .25-.06.34-.13l.07-.21-6.21-6.23h-.05c-.11.15-.19.4-.19.67v1.94c0 .92.48 1.41 1.34 1.41" />
  </svg>
);
export default SvgSpeakerslashcircleBold;
