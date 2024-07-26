import * as React from "react";
const SvgCirclelefthalffilledrighthalfstripedhorizontalinverseBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.85v.77a9.29 9.29 0 0 1-9.29-9.29c0-5.13 4.15-9.29 9.29-9.29v.77h3.73c.94.41 1.8.97 2.55 1.65h-6.28v.89h7.13c.43.52.79 1.07 1.11 1.65h-8.24v.9h8.65c.21.52.38 1.09.48 1.66h-9.13v.89h9.26c.02.28.04.59.04.88 0 .26-.02.5-.03.76h-9.27v.88h9.16a10 10 0 0 1-.46 1.66h-8.7v.89h8.3c-.29.59-.66 1.14-1.07 1.66h-7.23v.89h6.41c-.78.74-1.68 1.34-2.68 1.78Z" />
  </svg>
);
export default SvgCirclelefthalffilledrighthalfstripedhorizontalinverseBold;
