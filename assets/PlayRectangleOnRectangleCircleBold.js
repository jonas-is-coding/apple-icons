import * as React from "react";
const SvgPlayrectangleonrectanglecircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.7-10.78c0-1.48.82-2.3 2.31-2.3h6.32v-.07c0-.99-.58-1.56-1.64-1.56h-7.09c-1.07 0-1.64.57-1.64 1.65v5.03c0 1.07.57 1.63 1.6 1.63h.14Zm2.41 6.8h7.07c1.08 0 1.66-.58 1.66-1.64v-5.08c0-1.05-.58-1.63-1.66-1.63h-7.07c-1.08 0-1.66.58-1.66 1.63v5.08c0 1.06.58 1.64 1.66 1.64m2.06-2.38v-3.59c0-.24.26-.36.48-.23l3.01 1.77c.21.12.21.4.01.51l-3.02 1.77c-.22.13-.48.01-.48-.23" />
  </svg>
);
export default SvgPlayrectangleonrectanglecircleBold;
