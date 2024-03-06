import React from "react";
import { Box, Typography } from "@mui/material";
import DonutChart from "./DonutChart";
function Tokenomics() {
  return (
    <Box p={3} m={3} sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
      <Typography fontSize={20} fontWeight={"bold"}>
        {" "}
        Tokenomics
      </Typography>
      <Typography mt={2} fontWeight={"bold"}>
        Initial Distribution
      </Typography>
      <Box>
        <DonutChart />
      </Box>
      <Typography>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </Typography>
    </Box>
  );
}

export default Tokenomics;
