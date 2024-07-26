import * as React from "react";
const SvgIphonegen3CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-2.62-4.76c-1.23 0-2.09-.81-2.09-1.99V6.754c0-1.19.86-2 2.09-2h5.27c1.22 0 2.08.81 2.08 2v11.25c0 1.18-.86 1.99-2.08 1.99Zm.19-1.69h4.89c.47 0 .74-.27.74-.73v-10.4c0-.46-.27-.73-.74-.73h-4.89c-.49 0-.75.26-.75.72v10.43c0 .45.26.71.75.71m1.59-10.21c-.32 0-.56-.23-.56-.55 0-.31.24-.56.56-.56h1.7c.31 0 .56.25.56.56 0 .32-.23.55-.56.55Zm-.63 9.66c-.21 0-.38-.14-.38-.35 0-.24.17-.39.38-.39h2.97c.21 0 .37.15.37.39 0 .21-.16.35-.37.35Z" />
  </svg>
);
export default SvgIphonegen3CirclefillBold;
