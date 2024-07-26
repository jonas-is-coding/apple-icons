import * as React from "react";
const SvgArrowupforwardandarrowdownbackwardcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.99-9.3a1.005 1.005 0 1 0 0-2.01h-.37l-1.34.17 2.5-2.32c.46-.42.45-1.16.01-1.62-.46-.43-1.19-.45-1.62.01l-2.34 2.51.18-1.35v-.4c0-.55-.46-.99-1.01-.99s-1 .44-1 .99v3.71c0 .86.46 1.3 1.32 1.3Zm-6.01 6.01c.55 0 1.01-.43 1.01-1v-3.69c0-.87-.47-1.31-1.31-1.31h-3.69c-.55 0-1 .46-1 1.01s.45.99 1 .99h.38l1.33-.16-2.5 2.33c-.46.41-.44 1.16 0 1.61.45.44 1.19.45 1.61-.02l2.34-2.49-.16 1.33v.4c0 .57.44 1 .99 1" />
  </svg>
);
export default SvgArrowupforwardandarrowdownbackwardcircleBold;
