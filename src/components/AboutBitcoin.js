import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import abtbtc1 from "../images/abtbtc1.png";
import abtbtc2 from "../images/abtbtc2.png";

function AboutBitcoin() {
  return (
    <Box m={3} p={4} sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
      <Typography fontWeight={"bold"} fontSize={25}>
        About Bitcoin
      </Typography>
      <Typography mt={2} fontWeight={"bold"}>
        What is Bitcoin?
      </Typography>
      <Typography mt={1} mb={2} color={"rgba(62, 66, 74, 1)"}>
        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </Typography>
      <Divider />
      <Typography mt={2} fontWeight={"bold"}>
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography mt={1} mb={3} color={"rgba(62, 66, 74, 1)"}>
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna
        aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet.
        Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio
        cursus phasellus velit in senectus enim dui. Turpis tristique placerat
        interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc.
        Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim
        augue viverra nulla et quis lobortis phasellus. Integer pellentesque
        enim convallis ultricies at. Fermentum hendrerit imperdiet nulla viverra
        faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper
        scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
        lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat
        in eget. Ullamcorper dui
      </Typography>
      <Divider />
      <Typography mt={2} fontWeight={"bold"}>
        Already Holding Bitcoin?
      </Typography>
      <Box mb={2} display={"flex"} flexWrap={"wrap"}>
        <Box
          p={1.5}
          m={1}
          display={"flex"}
          alignItems={"center"}
          sx={{
            background:
              "linear-gradient(135deg, rgba(94,203,95,1) 27%, rgba(15,220,230,1) 77%)",
            borderRadius: 5,
          }}
        >
          <img className="abt_btc" src={abtbtc1} width={120} height={150} />

          <Box
            p={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              color={"white"}
              fontSize={20}
              m={2}
            >
              Calculate Your <br />
              Profits
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Check Now
            </Button>
          </Box>
        </Box>
        <Box
          p={1.5}
          m={1}
          display={"flex"}
          alignItems={"center"}
          sx={{
            background:
              "linear-gradient(135deg, rgba(234,152,121,1) 27%, rgba(230,136,15,1) 77%)",
            borderRadius: 5,
          }}
        >
          <img className="abt_btc" src={abtbtc2} width={120} height={150} />
          <Box
            p={3}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              color={"white"}
              fontSize={20}
              m={2}
            >
              Calculate Your <br /> Tax Liablity
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Check Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Typography mt={2} color={"rgba(62, 66, 74, 1)"}>
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </Typography>
    </Box>
  );
}

export default AboutBitcoin;
