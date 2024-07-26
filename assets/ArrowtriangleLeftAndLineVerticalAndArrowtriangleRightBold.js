import * as React from "react";
const SvgArrowtriangleleftandlineverticalandarrowtrianglerightBold = ({
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
    <path d="M19.444 25.369c.7 0 1.3-.5 1.3-1.24v-22.9c0-.73-.61-1.23-1.3-1.23-.67 0-1.29.52-1.29 1.23v22.9c0 .74.61 1.24 1.29 1.24m9.16-5.29 9.2-5.59c1.45-.88 1.44-2.74 0-3.6l-9.2-5.59c-1.46-.9-3.1-.14-3.1 1.64v11.49c0 1.8 1.67 2.51 3.1 1.65m-27.51-5.59 9.18 5.59c1.44.86 3.11.15 3.11-1.65V6.939c0-1.78-1.63-2.54-3.11-1.64l-9.18 5.59c-1.46.86-1.46 2.72 0 3.6m27.24 2.89c-.1.07-.29.06-.29-.14v-9.12c0-.2.2-.2.29-.14l7.42 4.54c.19.11.13.24 0 .32Zm-25.2-4.54c-.12-.08-.18-.21.01-.32l7.4-4.54c.11-.06.3-.06.3.14v9.12c0 .2-.19.22-.3.14Z" />
  </svg>
);
export default SvgArrowtriangleleftandlineverticalandarrowtrianglerightBold;
