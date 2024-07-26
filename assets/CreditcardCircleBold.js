import * as React from "react";
const SvgCreditcardcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-6.52-11.73h13.05v-.47c0-1.23-.68-1.9-1.92-1.9h-9.22c-1.23 0-1.91.67-1.91 1.9Zm1.91 7.27h9.22c1.24 0 1.92-.67 1.92-1.9v-4.03H5.852v4.03c0 1.23.68 1.9 1.91 1.9m.43-1.81c-.32 0-.54-.21-.54-.52v-1.01c0-.31.22-.52.54-.52h1.34c.31 0 .53.21.53.52v1.01c0 .31-.22.52-.53.52Z" />
  </svg>
);
export default SvgCreditcardcircleBold;
