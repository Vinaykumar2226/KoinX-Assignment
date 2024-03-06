import React from "react";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import menu from "../images/menu-icon.png";

function Header() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "5px 20px 5px 50px",
          height: "70px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} width={100} height={25} />
        </Box>
        <Box display={{ sm: "none", md: "block", xs: "none" }}>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ListItem>
              <ListItemText>
                <Typography fontWeight={"bold"} fontFamily={"Inter"} noWrap>
                  Crypto Taxes
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Typography fontWeight={"bold"} fontFamily={"Inter"} noWrap>
                  Free Tools
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Typography fontWeight={"bold"} fontFamily={"Inter"} noWrap>
                  Resource Center
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Button variant="contained">
                  <Typography noWrap variant="p" fontFamily={"Inter"}>
                    {" "}
                    Get Started{" "}
                  </Typography>
                </Button>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box
          display={{ sm: "flex", md: "none", xs: "flex", lg: "none" }}
          alignItems={"center"}
        >
          <Button>
            <img src={menu} width={40} height={30} />
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
