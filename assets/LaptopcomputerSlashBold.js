import * as React from "react";
const SvgLaptopcomputerslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.862 25.126a.993.993 0 0 0 1.4-1.41L6.832.286c-.39-.38-1.02-.38-1.41 0-.37.38-.37 1.02 0 1.4Zm2.85-2.2h2.27c.96 0 1.77-.79 1.77-1.76 0-.98-.81-1.77-1.77-1.77h-2.33V5.726c0-2.13-1.21-3.33-3.34-3.33h-17.12l3.01 3.03h13.38c.7 0 1.05.32 1.05 1.04v12.83h-.54Zm-10.82-3.53H7.122V6.466c0-.28.09-.49.26-.6l-2.45-2.45c-.54.53-.83 1.3-.83 2.31v13.67h-2.33c-.96 0-1.77.79-1.77 1.77 0 .97.81 1.76 1.77 1.76h22.67Z" />
  </svg>
);
export default SvgLaptopcomputerslashBold;
