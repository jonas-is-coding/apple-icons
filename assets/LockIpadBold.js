import * as React from "react";
const SvgLockipadBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.056c0 2.36 1.5 3.82 3.9 3.82h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82Zm3.02-.48V4.296c0-.82.45-1.27 1.33-1.27h12.43c.88 0 1.32.45 1.32 1.27v19.28c0 .82-.44 1.28-1.32 1.28H4.352c-.88 0-1.33-.46-1.33-1.28m5.5-5.58h4.1c.68 0 1.02-.35 1.02-1.07v-3.19c0-.61-.25-.95-.75-1.06v-.78c0-1.47-.94-2.49-2.32-2.49-1.37 0-2.32 1.02-2.32 2.49v.8c-.49.09-.75.43-.75 1.04v3.19c0 .72.34 1.07 1.02 1.07m.97-5.34v-.82c0-.73.43-1.22 1.08-1.22.64 0 1.08.49 1.08 1.22v.82Z" />
  </svg>
);
export default SvgLockipadBold;
