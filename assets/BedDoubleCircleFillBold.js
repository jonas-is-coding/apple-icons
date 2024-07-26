import * as React from "react";
const SvgBeddoublecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.55-14v-1.5c0-1.03.55-1.56 1.57-1.56h7.97c1.02 0 1.57.53 1.57 1.56v1.5h-1.42v-.68c0-.54-.29-.82-.84-.82h-1.87c-.54 0-.83.28-.83.82v.68h-1.16v-.68c0-.54-.28-.82-.82-.82h-1.92c-.54 0-.83.28-.83.82v.68Zm-1.35 5.83v-3.26c0-1.1.61-1.7 1.72-1.7h10.37c1.11 0 1.72.6 1.72 1.7v3.26c0 .29-.2.48-.49.48h-.34c-.29 0-.49-.19-.49-.48v-.73c-.06.01-.24.02-.41.02H7.192c-.15 0-.35-.01-.4-.02v.73c0 .29-.21.48-.5.48h-.33c-.29 0-.49-.19-.49-.48" />
  </svg>
);
export default SvgBeddoublecirclefillBold;
