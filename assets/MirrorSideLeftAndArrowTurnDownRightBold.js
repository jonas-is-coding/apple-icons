import * as React from "react";
const SvgMirrorsideleftandarrowturndownrightBold = ({
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
    <path d="M12.668 18.606h18.18c1.82 0 3.24.14 4.65.5 1.7.44 2.93-.12 2.93-1.95v-5.5c0-1.19-.88-2.07-2.09-2.07h-2.61c-.76 0-1.18-.38-1.1-1.24l.33-3.07c.35-3.25-1.61-5.28-5.23-5.28-3.67.02-10.69.16-14.78.64-4.23.49-7.11 2.73-8.25 6.23h3.32c.92-1.86 2.72-3.01 5.24-3.29 3.98-.45 10.82-.65 14.47-.65 1.85 0 2.47.58 2.31 2.01l-.95 8.48c-.2 1.75-.85 2.29-2.79 2.29h-13.65c-2.59 0-4.42-1.06-5.17-3.01h-3.12c.81 3.78 3.8 5.91 8.31 5.91m-12.67-12.1c0 2.7 1.78 4.42 4.61 4.42h6.67v1.16c0 .92.72 1.28 1.48.76l3.22-2.21c.63-.43.63-1.19 0-1.64l-3.19-2.2c-.8-.55-1.51-.18-1.51.76v1.08h-6.67c-1.4 0-2.29-.82-2.29-2.13v-1.42a1.16 1.16 0 0 0-2.32 0Z" />
  </svg>
);
export default SvgMirrorsideleftandarrowturndownrightBold;
