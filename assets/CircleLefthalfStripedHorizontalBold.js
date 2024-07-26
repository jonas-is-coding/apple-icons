import * as React from "react";
const SvgCirclelefthalfstripedhorizontalBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.01-3.85h-3.73c-1-.44-1.9-1.04-2.68-1.78h6.41v-.89h-7.24c-.41-.52-.76-1.07-1.06-1.66h8.3v-.89h-8.69c-.21-.52-.36-1.09-.47-1.66h9.16v-.88h-9.27c-.02-.26-.03-.5-.03-.76 0-.29.01-.6.05-.88h9.25v-.89h-9.14c.12-.57.29-1.14.5-1.66h8.64v-.9h-8.23c.3-.58.68-1.13 1.1-1.65h7.13v-.89h-6.28c.75-.68 1.61-1.24 2.55-1.65h3.73v-.77c5.14 0 9.29 4.14 9.29 9.29 0 5.13-4.15 9.29-9.29 9.29Z" />
  </svg>
);
export default SvgCirclelefthalfstripedhorizontalBold;
