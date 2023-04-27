import * as React from "react";
import {
  AppBar,
  Toolbar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./styled";
import Logo from "@src/assets/Logo2";
import { Box } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <Logo />
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        {/* <Typography variant="h6" noWrap component="div"> */}
        {/* Mini variant drawer */}
        {/* </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
