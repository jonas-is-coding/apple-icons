import * as React from "react";
const SvgSwitchprogrammablesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.407h14.13c2.68 0 4.13-1.45 4.13-4.11V4.117c0-2.66-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v14.18c0 2.66 1.46 4.11 4.14 4.11m3.92-4.64c-.69 0-1.16-.47-1.16-1.16V5.727c0-.68.47-1.16 1.16-1.16h6.28c.69 0 1.16.48 1.16 1.16v10.88c0 .69-.47 1.16-1.16 1.16Zm.9-7.85h4.48c.3 0 .5-.21.5-.53v-2.73c0-.32-.2-.52-.5-.52h-4.48c-.29 0-.5.2-.5.52v2.73c0 .32.21.53.5.53m0 6.29h4.48c.3 0 .5-.21.5-.52v-2.74c0-.31-.2-.51-.5-.51h-4.48c-.29 0-.5.2-.5.51v2.74c0 .31.21.52.5.52" />
  </svg>
);
export default SvgSwitchprogrammablesquarefillBold;
