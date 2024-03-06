import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

function YoumayLike() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => response.json())
      .then((a) => setData(a));
  }, []);

  return (
    <Box m={3} p={3} sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
      <Typography fontSize={20} fontWeight={"bold"}>
        You may Like
      </Typography>
      <Box m={3} display={"flex"} flexDirection={"row"} overflow={"auto"}>
        {data ? (
          data.coins.map((ele) => (
            <Box
              m={2}
              border={0.5}
              borderColor={"rgba(227, 227, 227, 1)"}
              borderRadius={3}
              p={3}
            >
              <Box display={"flex"}>
                <img src={ele.item.small} />
                <Typography fontWeight={"bold"} fontSize={18} m={1}>
                  {ele.item.symbol}
                </Typography>
                <Box
                  borderRadius={3}
                  sx={{
                    backgroundColor:
                      ele.item.data.price_change_percentage_24h.usd < 0
                        ? "rgba(238, 104, 85, 0.1)"
                        : "rgba(235, 249, 244, 1)",
                    height: "80%",
                    color:
                      ele.item.data.price_change_percentage_24h.usd < 0
                        ? "red"
                        : "green",
                  }}
                >
                  <Typography m={1}>
                    {ele.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </Typography>
                </Box>
              </Box>
              <Typography m={2} fontWeight={"bold"} fontSize={20}>
                {ele.item.data.price}
              </Typography>
              <Box>
                <img src={ele.item.data.sparkline} />
              </Box>
            </Box>
          ))
        ) : (
          <Typography>Loading</Typography>
        )}
      </Box>
    </Box>
  );
}

export default YoumayLike;
