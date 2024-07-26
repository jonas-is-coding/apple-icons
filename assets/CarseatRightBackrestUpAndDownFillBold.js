import * as React from "react";
const SvgCarseatrightbackrestupanddownfillBold = ({
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
    <path d="M34.799 20.669c1.06-3.82-1.67-5.58-8.45-5.58-2.9 0-5.82.25-8.22.67.55-4.38-.73-7.99-3.64-10.03.34-3.26-1.74-5.73-4.27-5.73-2.12 0-3.54 1.72-2.83 4.61l4.55 18.42c.48 1.96 1.77 3 3.69 3h14.27c2.63 0 3.78-1.26 4.9-5.36m-14.93-12.51c.21.83 1.05.98 1.62.4l3.4-3.46c.56-.55.34-1.41-.42-1.63l-4.66-1.39c-.78-.24-1.41.32-1.21 1.11Zm-13.27 4.43-1.28-4.96c-.21-.82-1.03-1-1.61-.4l-3.4 3.46c-.55.55-.35 1.4.41 1.63l4.66 1.38c.79.23 1.42-.3 1.22-1.11" />
  </svg>
);
export default SvgCarseatrightbackrestupanddownfillBold;
