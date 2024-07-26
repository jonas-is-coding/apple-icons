import * as React from "react";
const SvgArrowtriangleleftandlineverticalandarrowtrianglerightfillBold = ({
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
    <path d="M19.432 25.369c.7 0 1.3-.5 1.3-1.24v-22.9c0-.73-.61-1.23-1.3-1.23-.67 0-1.29.52-1.29 1.23v22.9c0 .74.61 1.24 1.29 1.24m18.56-11.11c1.18-.71 1.16-2.42 0-3.11l-9.76-5.79c-1.26-.75-2.74-.03-2.74 1.44v11.81c0 1.45 1.5 2.14 2.74 1.41Zm-37.11 0 9.76 5.76c1.24.73 2.74.04 2.74-1.41V6.799c0-1.47-1.49-2.19-2.74-1.44l-9.76 5.79c-1.16.69-1.19 2.4 0 3.11" />
  </svg>
);
export default SvgArrowtriangleleftandlineverticalandarrowtrianglerightfillBold;
