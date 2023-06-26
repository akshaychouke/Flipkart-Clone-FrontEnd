import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/util";
import GroupButton from "./GroupButton";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 10px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;
const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img
          src={item[0].url}
          alt="CartProduct"
          style={{ height: "110ox", width: "110px" }}
        />
        <GroupButton />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addEllipsis(item[0].title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet{" "}
          <Box component="span">
            <img
              src={fassured}
              alt="flipkartAssured"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: "600", fontSize: "18px" }}>
            ₹{item[0].price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item[0].price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item[0].price.discount} off
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item[0].id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
