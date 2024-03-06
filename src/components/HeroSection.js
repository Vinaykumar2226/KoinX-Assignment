import React from "react";
import { Box, Grid } from "@mui/material";
import BitcoinDetails from "./BitcoinDetails";
import SideComponent from "./SideComponent";
import OverView from "./OverView";
import Sentiment from "./Sentiment";
import AboutBitcoin from "./AboutBitcoin";
import Tokenomics from "./Tokenomics";
import Team from "./Team";
import TrendingCoins from "./TrendingCoins";
import YoumayLike from "./YoumayLike";

function HeroSection() {
  return (
    <Box>
      <Grid container display={"flex"} flexDirection={"row"}>
        <Grid item lg={8} md={12} sm={12} xs={12}>
          <BitcoinDetails />
          <OverView />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
          <TrendingCoins />
          <YoumayLike />
        </Grid>
        <Grid item lg={4}>
          <SideComponent />
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
