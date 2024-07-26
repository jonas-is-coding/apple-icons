import * as React from "react";
const SvgFlashlightslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.23-18.46v-.18c0-.91.46-1.37 1.35-1.37h3.77c.89 0 1.34.46 1.34 1.37v.18Zm8.1 11.96L6.482 7.524a.743.743 0 0 1 0-1.02c.29-.28.75-.28 1.03 0l10.73 10.73c.29.29.29.73 0 1.02-.28.27-.73.26-1 0m-2.92-6.23-4.71-4.72v-.14h5.99v.46c0 .59-.22 1.04-.53 1.53l-.37.57c-.23.38-.38.82-.38 1.51Zm-3.89.73 3.89 3.87v2.01c0 .9-.47 1.37-1.35 1.37h-1.21c-.86 0-1.33-.47-1.33-1.37Z" />
  </svg>
);
export default SvgFlashlightslashcirclefillBold;
