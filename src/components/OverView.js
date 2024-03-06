import React from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

function OverView() {
  return (
    <Box m={3}>
      <Box overflow={"auto"}>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                color={"rgba(62, 66, 74, 1)"}
                noWrap
              >
                OverView
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                Fundamentals
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                News Insights
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                Sentiments
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                Team
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                Technicals
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                fontWeight={"bold"}
                fontFamily={"Inter"}
                noWrap
                color={"rgba(62, 66, 74, 1)"}
              >
                Tokenomics
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box p={3} sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <Typography fontWeight={"bold"} fontSize={30}>
          Performance
        </Typography>
        <Box pt={3}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography color={"rgba(68, 71, 91, 1)"}>Today's Low</Typography>
              <Typography color={"rgba(68, 71, 91, 1)"}>46,930,22</Typography>
            </Box>
            <Box>
              <Box
                height={6}
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(228,41,41,1) 18%, rgba(215,177,10,1) 53%, rgba(42,231,123,1) 71%)",
                  width: { lg: 500, xs: 130, sm: 380, md: 500 },
                  borderRadius: 2,
                }}
              ></Box>
              <Typography ml={"50%"}>^</Typography>
            </Box>
            <Box>
              <Typography color={"rgba(68, 71, 91, 1)"}>
                Today's High
              </Typography>
              <Typography color={"rgba(68, 71, 91, 1)"}>48,902,22</Typography>
            </Box>
          </Box>
        </Box>
        <Box pt={3}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography color={"rgba(68, 71, 91, 1)"}>52W Low</Typography>
              <Typography color={"rgba(68, 71, 91, 1)"}>46,930,22</Typography>
            </Box>
            <Box>
              <Box
                height={6}
                sx={{
                  background:
                    "linear-gradient(90deg, rgba(228,41,41,1) 15%, rgba(215,177,10,1) 31%, rgba(212,251,19,1) 52%, rgba(42,231,123,1) 77%)",
                  width: { lg: 500, xs: 130, sm: 380, md: 500 },
                  borderRadius: 2,
                }}
              ></Box>
              <Typography ml={"50%"}>^</Typography>
            </Box>
            <Box>
              <Typography color={"rgba(68, 71, 91, 1)"}>52W High</Typography>
              <Typography color={"rgba(68, 71, 91, 1)"}>48,902,22</Typography>
            </Box>
          </Box>
        </Box>
        <Box pt={5} className="Fundamentals">
          <Typography
            fontSize={20}
            color={"rgba(118, 131, 150, 1)"}
            fontWeight={"bold"}
          >
            Fundamentals
          </Typography>
          <Box
            mt={5}
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Box pl={2} display={"flex"} flexDirection={"column"} flexGrow={1}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Bitcoin Price
                </Typography>
                <Typography fontWeight={"bold"}>$15,655.65</Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography pr={2} color={"rgba(118, 131, 150, 1)"}>
                  24h Low / 24h High
                </Typography>
                <Typography fontWeight={"bold"}>
                  $15,655.65 / $15,655.65
                </Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  7d Low / 7d High
                </Typography>
                <Typography fontWeight={"bold"}>
                  $15,655.65 / $15,655.65
                </Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Trading Volume
                </Typography>
                <Typography fontWeight={"bold"}>$15,655.65</Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Market Cap Rank
                </Typography>
                <Typography fontWeight={"bold"}>#1</Typography>
              </Box>
              <hr />
            </Box>
            <Box pl={2} display={"flex"} flexDirection={"column"} flexGrow={1}>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Market Cap
                </Typography>
                <Typography fontWeight={"bold"}>$15,655.65</Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Market Cap
                </Typography>
                <Typography fontWeight={"bold"}>$15,655.65</Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  Volume / Market Cap
                </Typography>
                <Typography fontWeight={"bold"}>
                  $15,655.65 / $15,655.65
                </Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  All Time High
                </Typography>
                <Typography fontWeight={"bold"}>$15,655.65</Typography>
              </Box>
              <hr />
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography color={"rgba(118, 131, 150, 1)"}>
                  All Time Low
                </Typography>
                <Typography fontWeight={"bold"}>#1</Typography>
              </Box>
              <hr />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OverView;
