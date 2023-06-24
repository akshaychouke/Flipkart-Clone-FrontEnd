import React from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    minWidth: "20%",
    padding: "10px 15px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  padding: "15px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: "2px",
  height: "50px",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "42%",
  },
  // [theme.breakpoints.down("sm")]: {
  //   width: "48%",
  // },
}));

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product[0].detailUrl} alt="product" />
      </Box>
      <StyledButton
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton style={{ background: "#fb641b" }} variant="contained">
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
