import * as React from "react";
const SvgCirclelefthalfstripedhorizontalinverseBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-21.66h.01v.77h-3.73c1.14-.5 2.4-.77 3.72-.77m-7.12 3.31c.27-.31.55-.61.85-.89h6.28v.89Zm-1.51 2.55c.11-.31.25-.6.41-.9h8.23v.9Zm-.61 2.54c.02-.31.07-.6.11-.88h9.14v.88Zm.09 2.53c-.05-.28-.08-.59-.11-.88h9.27v.88Zm.86 2.54c-.16-.28-.29-.57-.39-.88h8.69v.88Zm1.88 2.55c-.29-.27-.56-.57-.82-.88h7.24v.88Zm6.41 2.56c-1.32 0-2.58-.28-3.72-.77h3.73v.77Z" />
  </svg>
);
export default SvgCirclelefthalfstripedhorizontalinverseBold;
