import * as React from "react";
const SvgExclamationmarklockfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.847 23.974h11.43c1.87 0 2.83-.97 2.83-3.02v-8.71c0-1.81-.77-2.79-2.29-2.96v-2.7c0-4.18-2.83-6.58-6.26-6.58-3.44 0-6.25 2.4-6.25 6.58v2.7c-1.52.17-2.31 1.15-2.31 2.96v8.71c0 2.05.96 3.02 2.85 3.02m2.25-17.53c0-2.38 1.54-3.76 3.46-3.76s3.48 1.38 3.48 3.76v2.8h-6.94Zm3.45 11.31c-.6 0-1.01-.39-1.04-1l-.1-3.41c-.02-.64.46-1.11 1.14-1.11.66 0 1.18.47 1.16 1.11l-.13 3.41c-.03.61-.42 1-1.03 1m.01 3.29c-.73 0-1.29-.51-1.29-1.22 0-.7.56-1.21 1.29-1.21.71 0 1.3.51 1.3 1.21 0 .71-.58 1.22-1.3 1.22" />
  </svg>
);
export default SvgExclamationmarklockfillBold;
