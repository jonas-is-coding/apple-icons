import * as React from "react";
const SvgArrowupleftanddownrightmagnifyingglassBold = ({
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
    <path d="M.005 9.884c0 5.44 4.41 9.86 9.86 9.86 1.82 0 3.49-.5 4.92-1.37l4.72 4.71c.45.46 1.06.68 1.69.68 1.36 0 2.37-1.03 2.37-2.37 0-.63-.22-1.21-.68-1.68l-4.66-4.68a9.4 9.4 0 0 0 1.52-5.15 9.87 9.87 0 0 0-9.88-9.88c-5.45 0-9.86 4.41-9.86 9.88m3.19 0c0-3.68 3-6.67 6.67-6.67 3.68 0 6.67 2.99 6.67 6.67 0 3.66-2.99 6.66-6.67 6.66-3.67 0-6.67-3-6.67-6.66m2.88-.47c0 .7.75.9 1.19.47l.68-.68 2.57 2.56-.73.7c-.44.43-.23 1.19.46 1.19h2.65c.46 0 .75-.32.75-.83v-2.49c0-.7-.75-.9-1.2-.48l-.71.7-2.56-2.55.74-.73c.44-.44.25-1.19-.46-1.19h-2.63c-.47 0-.75.33-.75.83Z" />
  </svg>
);
export default SvgArrowupleftanddownrightmagnifyingglassBold;
