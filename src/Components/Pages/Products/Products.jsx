import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../Common/ProductCard";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Navbar } from "../../Layout/Navbar/Navbar";

export const Products = ({ items }) => {
  console.log(items);

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  return (
    //Render each product
    <div>
      <Navbar />
      <Link to="/create">
        <button>Agregar producto</button>
      </Link>

      <div style={{ width: "100%" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {items.map((element) => (
            <Item key={element.id}>
              <ProductCard element={element} />
            </Item>
          ))}
        </Box>
      </div>
    </div>
  );
};
