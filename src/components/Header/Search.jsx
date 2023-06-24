import styled from "@emotion/styled";
import { InputBase, Box, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
//to handle the default css of the mui componets

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const getText = (text) => {
    setText(text);
  };
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products,brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                onClick={() => setText("")}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
      {/* above code is to show the items based on user input in search input field */}
    </SearchContainer>
  );
};

export default Search;
