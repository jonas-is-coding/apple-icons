import * as React from "react";
const SvgFigureflexibilitycirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.94-16.48c-.78 0-1.44-.66-1.44-1.46 0-.78.66-1.44 1.44-1.44.8 0 1.45.66 1.45 1.44 0 .8-.65 1.46-1.45 1.46m8.94 8.55c.34.18.47.62.3.96-.16.31-.57.51-.98.28l-3.65-1.95-2.22-1.26-3.61-.27v2.86c0 .39-.31.72-.72.72-.38 0-.7-.33-.7-.72v-3.43l-1.19-2.1a.71.71 0 0 1 .1-.86l1.72-1.71c.32-.31.65-.44 1.12-.44h1.51c.72 0 1.37.49 1.55 1.19l.47 1.93c.07.28-.03.56-.25.73.13.16.27.29.44.39l2.41 1.68Zm-11.27-5.13.81 1.42h.38l.63-.36-.81-2.08Z" />
  </svg>
);
export default SvgFigureflexibilitycirclefillBold;
