import * as React from "react";
const SvgArrowuprightandarrowdownleftrectanglefillBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m11.34-18.03c.57 0 .98.43.98 1.02v1.18l-.1 1.37 1.17-1.4 2.06-2.07c.27-.25.55-.37.87-.37.62 0 1.09.46 1.09 1.08 0 .28-.14.57-.38.81l-2.09 2.11-1.42 1.16 1.31-.13h1.27c.58 0 1.02.42 1.02.99s-.44.99-1.01.99h-4.45c-.81 0-1.31-.46-1.31-1.3v-4.41c0-.59.41-1.03.99-1.03m-2.99 13.66c-.56 0-.98-.43-.98-1.02v-1.18l.1-1.37-1.17 1.4-2.06 2.07c-.27.26-.55.37-.87.37-.61 0-1.08-.45-1.08-1.08 0-.28.13-.57.37-.8l2.09-2.11 1.42-1.16-1.3.12h-1.28c-.58 0-1.02-.42-1.02-.99 0-.56.44-.99 1.01-.99h4.45c.81 0 1.32.46 1.32 1.31v4.4c0 .59-.43 1.03-1 1.03" />
  </svg>
);
export default SvgArrowuprightandarrowdownleftrectanglefillBold;
