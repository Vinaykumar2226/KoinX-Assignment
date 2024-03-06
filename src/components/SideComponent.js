import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import sideimg from "../images/sideimg.png";
import Button from "@mui/material/Button";

function SideComponent() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((a) => setData(a));
  }, []);

  return (
    <Box m={6}>
      <Box
        p={5}
        sx={{ backgroundColor: "rgba(0, 82, 254, 1)", borderRadius: "30px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography
          fontWeight={"bold"}
          color={"white"}
          fontSize={20}
          textAlign={"center"}
        >
          Get Started with KoinX for FREE
        </Typography>
        <Typography mt={3} fontSize={13} textAlign={"center"} color={"white"}>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </Typography>
        <img src={sideimg} width={250} />
        <Button
          sx={{
            marginTop: "15px",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          }}
          variant="contained"
        >
          Get Started for FREE
        </Button>
      </Box>
      <Box
        backgroundColor={"rgba(255,255,255,1)"}
        p={3}
        mt={2}
        borderRadius={3}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          Trending Coins (24h)
        </Typography>
        {data ? (
          <>
            <Box
              mt={3}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"}>
                <img src={data.coins[0].item.small} />
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[0].item.name}({data.coins[0].item.symbol})
                </Typography>
              </Box>
              <Box
                borderRadius={3}
                sx={{
                  backgroundColor:
                    data.coins[0].item.data.price_change_percentage_24h.usd < 0
                      ? "rgba(238, 104, 85, 0.1)"
                      : "rgba(235, 249, 244, 1)",
                  height: "80%",
                  color:
                    data.coins[0].item.data.price_change_percentage_24h.usd < 0
                      ? "red"
                      : "green",
                }}
              >
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[0].item.data.price_change_percentage_24h.usd.toFixed(
                    2
                  )}
                  %
                </Typography>
              </Box>
            </Box>
            <Box
              mt={3}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"}>
                <img src={data.coins[1].item.small} />
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[1].item.name}({data.coins[0].item.symbol})
                </Typography>
              </Box>
              <Box
                borderRadius={3}
                sx={{
                  backgroundColor:
                    data.coins[1].item.data.price_change_percentage_24h.usd < 0
                      ? "rgba(238, 104, 85, 0.1)"
                      : "rgba(235, 249, 244, 1)",
                  height: "80%",
                  color:
                    data.coins[1].item.data.price_change_percentage_24h.usd < 0
                      ? "red"
                      : "green",
                }}
              >
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[1].item.data.price_change_percentage_24h.usd.toFixed(
                    2
                  )}
                  %
                </Typography>
              </Box>
            </Box>
            <Box
              mt={3}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"}>
                <img src={data.coins[2].item.small} />
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[2].item.name}({data.coins[0].item.symbol})
                </Typography>
              </Box>
              <Box
                borderRadius={3}
                sx={{
                  backgroundColor:
                    data.coins[2].item.data.price_change_percentage_24h.usd < 0
                      ? "rgba(238, 104, 85, 0.1)"
                      : "rgba(235, 249, 244, 1)",
                  height: "80%",
                  color:
                    data.coins[2].item.data.price_change_percentage_24h.usd < 0
                      ? "red"
                      : "green",
                }}
              >
                <Typography m={2} fontWeight={"bold"}>
                  {data.coins[2].item.data.price_change_percentage_24h.usd.toFixed(
                    2
                  )}
                  %
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <Typography>Loading</Typography>
        )}
      </Box>
    </Box>
  );
}

export default SideComponent;
