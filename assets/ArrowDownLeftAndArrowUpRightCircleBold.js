import * as React from "react";
const SvgArrowdownleftandarrowuprightcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.87-9.09c.55 0 .99-.44.99-1v-3.76c0-.87-.45-1.31-1.31-1.31h-3.75c-.55 0-1.01.45-1.01 1.01s.46.99 1.01.99h.44l1.33-.16-2.13 1.98c-.47.42-.46 1.16-.02 1.6.45.45 1.19.47 1.61-.01l2-2.14-.17 1.33v.47c0 .56.44 1 1.01 1m-5.71 5.69c.55 0 1-.45 1-1 0-.56-.45-1-1-1h-.45l-1.32.16 2.13-1.98c.47-.42.45-1.16.01-1.6-.44-.45-1.18-.46-1.6.01l-2.01 2.16.18-1.35v-.47c0-.55-.46-1-1.01-1s-.99.45-.99 1v3.76c0 .88.45 1.31 1.31 1.31Z" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightcircleBold;
