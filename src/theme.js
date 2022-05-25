// @src/theme/theme.js

import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./components/style";
import { breakpoints } from "./components/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
);