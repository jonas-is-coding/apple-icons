import * as React from "react";
const SvgLockopenipadBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 24.056c0 2.36 1.5 3.82 3.9 3.82h13.32c2.4 0 3.91-1.46 3.91-3.82V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82Zm3.02-.48V4.296c0-.82.45-1.27 1.33-1.27h12.43c.88 0 1.32.45 1.32 1.27v19.28c0 .82-.44 1.28-1.32 1.28H4.352c-.88 0-1.33-.46-1.33-1.28m3.45-6.63c0 .71.33 1.05.98 1.05h4.1c.66 0 .99-.34.99-1.05v-3.11c0-.65-.28-.99-.85-1.04v-.85c0-.79.4-1.28 1.14-1.28s1.15.49 1.15 1.28v.63c0 .38.29.68.68.68.36 0 .67-.3.67-.68v-.63c0-1.53-.98-2.61-2.5-2.61-1.51 0-2.48 1.08-2.48 2.68v.78h-2.9c-.65 0-.98.34-.98 1.04Z" />
  </svg>
);
export default SvgLockopenipadBold;
