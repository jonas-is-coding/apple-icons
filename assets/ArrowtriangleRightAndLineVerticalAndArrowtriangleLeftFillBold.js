import * as React from "react";
const SvgArrowtrianglerightandlineverticalandarrowtriangleleftfillBold = ({
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
    <path d="M17.93 25.369c.7 0 1.29-.5 1.29-1.24v-22.9c0-.73-.6-1.23-1.29-1.23-.67 0-1.3.52-1.3 1.23v22.9c0 .74.61 1.24 1.3 1.24m-15.2-5.35 9.76-5.76c1.2-.71 1.17-2.42 0-3.11l-9.76-5.79C1.49 4.609 0 5.329 0 6.799v11.81c0 1.45 1.5 2.14 2.73 1.41m30.39 0c1.24.73 2.73.04 2.73-1.41V6.799c0-1.47-1.48-2.19-2.73-1.44l-9.76 5.79c-1.18.69-1.19 2.4 0 3.11Z" />
  </svg>
);
export default SvgArrowtrianglerightandlineverticalandarrowtriangleleftfillBold;
