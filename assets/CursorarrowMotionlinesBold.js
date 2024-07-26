import * as React from "react";
const SvgCursorarrowmotionlinesBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.57 22.557 9 14.277l4.34.26c1.13.08 1.68-1.17.88-1.98L2.18.377c-.75-.76-1.9-.31-1.92.77L0 18.157c-.02 1.18 1.3 1.68 2.07.8l2.72-3.06 3.41 8.45c.28.73.93.92 1.56.68l2.21-.86c.65-.25.91-.93.6-1.61m.86-19.84a1.14 1.14 0 1 0 0-2.28h-8.5l2.25 2.28Zm3.48 3.51c.63 0 1.14-.5 1.14-1.14 0-.63-.51-1.13-1.14-1.13H8.4l2.25 2.27Zm3.45 3.52c.63 0 1.13-.51 1.13-1.14s-.5-1.14-1.13-1.14h-8.49l2.26 2.28Zm3.49 1.24h-8.5c.73.76 1.05 1.44 1.06 2.27h7.44c.62 0 1.13-.5 1.13-1.13 0-.64-.51-1.14-1.13-1.14" />
  </svg>
);
export default SvgCursorarrowmotionlinesBold;
