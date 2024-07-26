import * as React from "react";
const SvgPlaypausecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.24-8.2c-.51.32-1.1.02-1.1-.5v-7.29c0-.53.62-.82 1.1-.52l5.36 3.56c.43.3.44.91 0 1.2Zm7.45.04c-.56 0-.84-.33-.84-.81v-6.8c0-.48.28-.8.84-.8h1.17c.56 0 .87.32.87.8v6.8c0 .48-.31.81-.87.81Zm4.14 0c-.57 0-.87-.33-.87-.8v-6.81c0-.48.3-.8.87-.8h1.18c.54 0 .84.32.84.8v6.81c0 .47-.3.8-.84.8Z" />
  </svg>
);
export default SvgPlaypausecirclefillBold;
