import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

export default function Direction(props: any) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl">{props.children}</div>
      </ThemeProvider>
    </CacheProvider>
  );
}
