import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../features/Cart/Cart";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Paper from "@mui/material/Paper";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { pink } from "@mui/material/colors";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const titleObject = useLocation();
  const headName = titleObject.state;

  const [inc, setInc] = useState(0);
  const { cartItems } = useSelector((store) => store.cart);
  // console.log({ cartItems });
  const [togg, setTogg] = useState(false);
  const dispatch = useDispatch();

  function handleQty(e) {
    setInc(e.target.value);

    let obj = {
      qty: e.target.value,
      price: headName.cost,
      title: headName.title,
    };

    if (togg === true && obj.qty !== "") {
      dispatch(addCart(obj));
    }
  }

  return (
    <div>
      <Container maxWidth="md">
        <AppBar sx={{ padding: "5px", backgroundColor: "#0275d8" }}>
          <Toolbar>
            <IconButton
              size="large"
              aria-label="show number of cart Items"
              color="inherit"
              sx={{
                marginLeft: "auto",
                marginRight: "2em",
              }}
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon
                  fontSize="large"
                  sx={{ color: "white" }}
                  onClick={() => navigate("/cart")}
                />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Paper elevation={3} sx={{ marginTop: "100px" }}>
          <Box padding={3}>
            <img src={headName.src} alt="alaska" className="image1" />
          </Box>
          <Box padding={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1em",
              }}
            >
              <Typography variant="h4" component="h1" marginLeft={1}>
                {headName.title}
              </Typography>
              <Typography variant="h6" component="h2" marginLeft={1}>
                <span style={{ fontSize: "1.1em", marginRight: "1.5em" }}>
                  $ {headName.cost}
                </span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="caption " marginLeft={1} marginBottom={2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                facere optio voluptatibus. Culpa, ducimus? Cupiditate, delectus,
              </Typography>
            </Box>
            Qty:
            <input
              type="number"
              style={{ height: "25px", paddingLeft: "10px" }}
              value={inc}
              onChange={handleQty}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              {togg ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                  }}
                  onClick={() => {
                    setTogg(false);
                    setInc(0);
                    // dispatch(removeCart());
                  }}
                >
                  <RemoveShoppingCartIcon
                    fontSize="large"
                    sx={{ color: pink[500] }}
                  />
                  <Typography
                    variant="h6"
                    color="success"
                    sx={{
                      marginLeft: "0.5em",
                      color: pink[500],
                    }}
                  >
                    Remove
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    "&:hover": { backgroundColor: "#F0F8FF" },
                  }}
                  onClick={(e) => {
                    setTogg(true);
                    setInc(1);
                    let obj = {
                      qty: 1,
                      price: headName.cost,
                      title: headName.title,
                    };

                    dispatch(addCart(obj));
                  }}
                >
                  <ShoppingCartIcon fontSize="large" color="primary" />
                  <Typography
                    variant="h6"
                    sx={{
                      marginLeft: "0.5em",
                      color: "#0275d8",
                    }}
                  >
                    ADD TO CART
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Product;
