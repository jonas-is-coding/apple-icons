import * as React from "react";
const SvgTimelineselectionBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.292 22.402h17.32c2.67 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.47-4.11-4.14-4.11h-17.32c-2.67 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.14 4.11m2.11-3.02V3.022h13.1v16.36Zm-4.09-4.72v-6.92c0-.52.45-.97.97-.97.54 0 .98.45.98.97v6.92c0 .54-.44.97-.98.97-.52 0-.97-.43-.97-.97m19.35 0v-6.92c0-.52.43-.97.97-.97.53 0 .97.45.97.97v6.92a.97.97 0 0 1-1.94 0m-29.66-.78c0 .84.74 1.19 1.44.78l4.36-2.63c.68-.4.66-1.27 0-1.66l-4.37-2.64c-.71-.42-1.43-.04-1.43.78Zm42.03 0v-5.37c0-.82-.72-1.2-1.43-.78l-4.37 2.64c-.65.39-.68 1.26 0 1.66l4.37 2.63c.7.41 1.43.06 1.43-.78" />
  </svg>
);
export default SvgTimelineselectionBold;
