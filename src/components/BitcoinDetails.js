import { Typography, Box } from "@mui/material";
import React from "react";
import bitcoin from "../images/bitlogo.png";
import TradingViewWidget from "./TradingViewWidget";
import { useEffect, useState } from "react";

function BitcoinDetails() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => res.json())
      .then((a) => setData(a));
    console.log(data);
  }, []);

  return (
    <Box ml={3} pt={3}>
      <Typography>
        CryptoCurrencies{">>"}
        <b>Bitcoin</b>
      </Typography>
      <Box p={3} mt={2} sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <img src={bitcoin} width={35} height={30} />
          <Typography
            pl={2}
            fontFamily={"Inter"}
            fontSize={20}
            fontWeight={"bold"}
          >
            Bitcoin
          </Typography>
          <Typography
            pl={2}
            fontFamily={"Inter"}
            fontSize={15}
            color={"rgba(93, 102, 123, 1)"}
            fontWeight={"bold"}
          >
            BTC
          </Typography>
          <Box
            ml={2}
            p={1}
            borderRadius={3}
            backgroundColor="rgba(128, 138, 157, 1)"
          >
            <Typography color={"white"}># Rank 1</Typography>
          </Box>
        </Box>
        <Box mb={2}>
          <Box
            mt={2}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Typography fontWeight={"bold"} fontSize={30}>
              $
              {data ? (
                data.market_data.current_price.usd
              ) : (
                <Typography>Loading</Typography>
              )}
            </Typography>
            <Box ml={2} mr={1} backgroundColor={"rgba(235, 249, 244, 1)"}>
              <Typography color={"green"}>^ 2.15% </Typography>
            </Box>
            (24H)
          </Box>
          <Box>
            <Typography fontWeight={"bold"}>
              ₹
              {data ? (
                data.market_data.current_price.inr
              ) : (
                <Typography>Loading</Typography>
              )}
            </Typography>
          </Box>
        </Box>
        <hr />
        <TradingViewWidget />
      </Box>
    </Box>
  );
}

export default BitcoinDetails;
