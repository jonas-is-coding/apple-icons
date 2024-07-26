import * as React from "react";
const SvgArrowupleftanddownrightandarrowuprightanddownleftBold = ({
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
    <path d="M.002 16.848v5.14c0 .89.62 1.54 1.52 1.54h5.16c1.43 0 1.92-1.56.94-2.55l-1.48-1.48 5.61-5.61 5.63 5.61-1.48 1.48c-1 .99-.49 2.55.94 2.55h5.15c.91 0 1.53-.65 1.53-1.54v-5.14c0-1.43-1.57-1.92-2.55-.95l-1.48 1.49-5.62-5.62 5.62-5.63 1.48 1.49c.98.98 2.55.49 2.55-.94v-5.14c0-.89-.62-1.55-1.53-1.55h-5.15c-1.43 0-1.94 1.57-.94 2.56l1.48 1.47-5.63 5.63-5.61-5.63 1.48-1.47c.98-.99.49-2.56-.94-2.56h-5.16c-.9 0-1.52.66-1.52 1.55v5.14c0 1.43 1.56 1.92 2.54.94l1.49-1.49 5.61 5.63-5.61 5.62-1.49-1.49c-.98-.97-2.54-.48-2.54.95" />
  </svg>
);
export default SvgArrowupleftanddownrightandarrowuprightanddownleftBold;
