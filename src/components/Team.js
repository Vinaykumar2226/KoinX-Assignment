import React from "react";
import { Box, Typography } from "@mui/material";
import t1 from "../images/team1.png";
import t2 from "../images/team2.png";
import t3 from "../images/team3.png";

function Team() {
  const data = [
    { img: t1, name: "John Smith" },
    { img: t2, name: "Elina Williams" },
    { img: t3, name: "John Smith" },
  ];
  return (
    <Box p={3} m={3} sx={{ backgroundColor: "rgba(255,255,255,1)" }}>
      <Typography fontWeight={"bold"} fontSize={20}>
        Team
      </Typography>
      <Typography mt={2}>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </Typography>
      {data.map((item) => (
        <Box
          mt={2}
          sx={{
            backgroundColor: "rgba(232, 244, 253, 1)",
            flexWrap: { sm: "wrap", xs: "wrap", md: "nowrap", lg: "nowrap" },
          }}
          display={"flex"}
          p={2}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            flexGrow={1}
          >
            <img src={item.img} width={150} height={160} />

            <Typography fontWeight={"bold"}>{item.name}</Typography>
            <Typography>Designation</Typography>
          </Box>
          <Typography m={3}>
            Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
            fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
            in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
            nec neque sed pellentesque viverra. Consectetur proin amet ut id
            facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
            egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu
          </Typography>
          <Box></Box>
        </Box>
      ))}
    </Box>
  );
}

export default Team;
