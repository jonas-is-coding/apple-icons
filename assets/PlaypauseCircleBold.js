import * as React from "react";
const SvgPlaypausecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.94-5.33 5.11-3.38c.42-.28.41-.84 0-1.12l-5.11-3.39c-.44-.29-1.04-.01-1.04.48v6.94c0 .49.57.77 1.04.47m7.1.04h1.12c.52 0 .8-.31.8-.77v-6.45c0-.47-.28-.78-.8-.78h-1.12c-.54 0-.81.31-.81.78v6.45c0 .46.27.77.81.77m3.93 0h1.11c.52 0 .8-.31.8-.77v-6.47c0-.45-.28-.76-.8-.76h-1.11c-.54 0-.82.31-.82.76v6.47c0 .46.28.77.82.77" />
  </svg>
);
export default SvgPlaypausecircleBold;
