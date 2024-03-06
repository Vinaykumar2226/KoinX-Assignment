import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import img1 from "../images/Sentiment_img1.png";
import img2 from "../images/Sentiment_img2.png";

function Sentiment() {
  return (
    <Box ml={3} p={4} sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
      <Typography fontSize={25} fontWeight={"bold"}>
        Sentiment
      </Typography>
      <Typography
        mt={2}
        color={"rgba(68, 71, 91, 1)"}
        fontWeight={"bold"}
        fontSize={20}
      >
        Key Events
      </Typography>
      <Box display={"flex"} overflow={"auto"}>
        <Box
          borderRadius={3}
          m={3}
          p={4}
          sx={{ backgroundColor: "rgba(232, 244, 253, 1)" }}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <img src={img1} width={50} height={50} />
            <Box pl={3}>
              <Typography fontWeight={"bold"}>
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </Typography>
              <Typography mt={2} color={"rgba(68, 71, 91, 1)"}>
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          borderRadius={3}
          m={3}
          p={4}
          sx={{ backgroundColor: "rgba(235, 249, 244, 1)" }}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <img src={img2} width={50} height={50} />
            <Box pl={3}>
              <Typography fontWeight={"bold"}>
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </Typography>
              <Typography mt={2} color={"rgba(68, 71, 91, 1)"}>
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed
                vitae sit nisi viverra natoque lacinia libero enim.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        mt={2}
        color={"rgba(68, 71, 91, 1)"}
        fontWeight={"bold"}
        fontSize={18}
      >
        Analyst Estimates
      </Typography>

      <Box display={"flex"}>
        <Box
          m={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            backgroundColor: "rgba(235, 249, 244, 1)",
            borderRadius: "50%",
            width: { lg: "120px", md: "120px", sm: "100px", xs: "100px" },
            height: { lg: "120px", md: "120px", sm: "100px", xs: "100px" },
          }}
        >
          <Typography p={2} color={"green"} fontWeight={"bold"} fontSize={30}>
            76%
          </Typography>
        </Box>
        <Box m={3}>
          <Box display={"flex"}>
            <Typography p={1}>Buy</Typography>

            <Box
              m={2}
              height={6}
              sx={{
                backgroundColor: "green",
                width: { lg: 380, xs: 50, sm: 114, md: 228 },
              }}
            ></Box>
            <Typography mt={1} variant="p">
              76%
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography p={1}>Hold</Typography>
            <Box
              m={2}
              height={6}
              width={40}
              sx={{
                backgroundColor: "rgba(199, 200, 206, 1)",
                width: { lg: 40, xs: 8, sm: 12, md: 24 },
              }}
            ></Box>
            <Typography mt={1} variant="p">
              8%
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography p={1}>Sell</Typography>
            <Box
              m={2}
              height={6}
              width={80}
              sx={{
                backgroundColor: "red",
                width: { lg: 40, xs: 16, sm: 24, md: 48 },
              }}
            ></Box>
            <Typography mt={1} variant="p">
              16%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Sentiment;
