import * as React from "react";
const SvgCarseatleftbackrestupanddownfillBold = ({
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
    <path d="M.223 20.669c1.13 4.1 2.26 5.36 4.89 5.36h14.27c1.93 0 3.21-1.04 3.69-3l4.56-18.42c.72-2.89-.71-4.61-2.82-4.61-2.53 0-4.62 2.47-4.28 5.73-2.91 2.04-4.2 5.65-3.64 10.03-2.41-.42-5.33-.67-8.22-.67-6.78 0-9.52 1.76-8.45 5.58m15.04-12.51 1.27-4.97c.2-.79-.42-1.35-1.2-1.11l-4.67 1.39c-.76.22-.98 1.08-.42 1.63l3.41 3.46c.57.58 1.4.43 1.61-.4m13.29 4.43c-.22.81.42 1.34 1.2 1.11l4.65-1.38c.78-.23.98-1.08.43-1.63l-3.4-3.46c-.59-.6-1.41-.42-1.61.4Z" />
  </svg>
);
export default SvgCarseatleftbackrestupanddownfillBold;
