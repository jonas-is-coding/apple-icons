import * as React from "react";
const SvgMusicmicrophonecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.29-18.09c1.09 1.08 1.05 2.57-.11 3.68l-3.57-3.59c1.11-1.12 2.59-1.18 3.68-.09m-5.13 2.77c-.09-.74.23-1.46.87-2.1l3.59 3.58c-.62.65-1.36.97-2.11.89l-1.68 1.55v4.36c0 .42-.32.75-.73.75-.44 0-.77-.32-.77-.75v-2.95l-2.77 2.56c-.3.29-.69.32-.99.1l-.89.67c-.2.15-.41.11-.6-.04l-.18-.17c-.19-.17-.2-.43-.05-.63l.67-.86c-.22-.31-.19-.71.09-1.01Zm-4.5 6.57.31.3 5.24-5.01c-.11-.09-.21-.18-.28-.26-.12-.12-.19-.2-.27-.32Z" />
  </svg>
);
export default SvgMusicmicrophonecirclefillBold;
