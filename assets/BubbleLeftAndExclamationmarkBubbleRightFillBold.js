import * as React from "react";
const SvgBubbleleftandexclamationmarkbubblerightfillBold = ({
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
    <path d="M.002 15.02c0 3.57 2.3 5.76 5.54 5.76h.33v3.28c0 .94.52 1.53 1.38 1.53.6 0 1.07-.27 1.8-.91l3.41-2.97c-.57-1-.86-2.2-.86-3.57v-7.17c0-4.33 2.82-7.14 7.25-7.14h6.99v-.12c-.66-2.34-2.57-3.71-5.4-3.71h-14.7C2.152 0 .002 2.18.002 5.74Zm18.85 8.16h4.01l4.22 3.62c.74.63 1.2.91 1.79.91.86 0 1.36-.59 1.36-1.53v-3h.18c3.24 0 5.14-1.89 5.14-5.04v-7.17c0-3.27-1.99-5.24-5.35-5.24h-11.35c-3.36 0-5.35 1.97-5.35 5.24v7.17c0 3.16 1.99 5.04 5.35 5.04m5.83-7.52c-.66 0-1.02-.36-1.07-1.02l-.14-3.11c-.03-.71.46-1.21 1.2-1.21.73 0 1.25.5 1.22 1.21l-.16 3.09c-.04.68-.41 1.04-1.05 1.04m0 3.43c-.8 0-1.34-.5-1.34-1.21 0-.7.53-1.19 1.34-1.19.77 0 1.32.48 1.32 1.19 0 .72-.54 1.21-1.32 1.21" />
  </svg>
);
export default SvgBubbleleftandexclamationmarkbubblerightfillBold;
