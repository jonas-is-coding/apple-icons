import * as React from "react";
const SvgZlbuttonroundedtophorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.952.004c-6.99 0-9.95 3.05-9.95 9.91v7.47c0 2.63 1.45 4.07 4.1 4.07h19.61c2.63 0 4.09-1.45 4.09-4.07v-7.47c0-6.86-2.97-9.91-9.95-9.91Zm.1 3.02h7.69c4.93 0 7.03 2.1 7.03 6.87v7.12c0 .93-.5 1.42-1.4 1.42H4.432c-.9 0-1.41-.49-1.41-1.42v-7.12c0-4.77 2.1-6.87 7.03-6.87m5.98 12.26h2.96c.45 0 .82-.37.82-.81 0-.45-.37-.82-.82-.82h-1.96v-6.62a1 1 0 0 0-.99-1c-.55 0-.99.45-.99 1v7.22c0 .64.35 1.03.98 1.03m-6.79.01h3.72c.47 0 .8-.33.8-.81a.78.78 0 0 0-.8-.81h-2.53v-.07l2.96-5.68c.11-.21.21-.46.21-.79 0-.57-.41-.95-.98-.95h-3.54c-.46 0-.86.32-.86.82 0 .45.34.81.86.81h2.37v.07l-3 5.72c-.13.26-.19.51-.19.79 0 .57.4.9.98.9" />
  </svg>
);
export default SvgZlbuttonroundedtophorizontalBold;
