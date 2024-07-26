import * as React from "react";
const SvgArrowtrianglerightandlineverticalandarrowtriangleleftBold = ({
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
    <path d="M17.967 25.369c.7 0 1.3-.5 1.3-1.24v-22.9c0-.73-.61-1.23-1.3-1.23-.67 0-1.29.52-1.29 1.23v22.9c0 .74.61 1.24 1.29 1.24m-5.66-10.88c1.44-.88 1.44-2.74 0-3.6l-9.2-5.59c-1.47-.9-3.11-.14-3.11 1.64v11.49c0 1.8 1.68 2.51 3.11 1.65Zm20.52 5.59c1.44.86 3.11.15 3.11-1.65V6.939c0-1.78-1.64-2.54-3.11-1.64l-9.19 5.59c-1.45.86-1.45 2.72 0 3.6Zm-22.57-7.24-7.42 4.54c-.11.07-.29.06-.29-.14v-9.12c0-.2.19-.2.29-.14l7.42 4.54c.17.11.13.24 0 .32m22.85 4.54-7.42-4.54c-.13-.08-.19-.21 0-.32l7.42-4.54c.09-.06.28-.06.28.14v9.12c0 .2-.18.21-.28.14" />
  </svg>
);
export default SvgArrowtrianglerightandlineverticalandarrowtriangleleftBold;
