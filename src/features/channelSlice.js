import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Router from "next/router";

const getCart = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("cart");

    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const getRam = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("ram");

    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const getStorage = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("storage");

    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const getPrice = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("price");

    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};

const getId = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("id");
    if (cartFromLocalStorage === []) {
      console.log(cartFromLocalStorage + "run");
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};

const getStock = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("stock");
    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const getQuantity = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("quantity");
    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const getSearched = () => {
  if (typeof window !== "undefined") {
    let cartFromLocalStorage = localStorage.getItem("searched");
    if (cartFromLocalStorage === []) {
      return [];
    } else {
      return JSON.parse(cartFromLocalStorage);
    }
  }
};
const initialState = {
  productsName: getCart() || [],
  ram: getRam() || [],
  storage: getStorage() || [],
  price: getPrice() || [],
  id: getId() || [],
  stock: getStock() || [],
  quantity: getQuantity() || [],
  searched: getSearched() || [],

  // collection: [],
};
function ItemsDeleted(state, action) {
  state.productsName.splice(action, 1);
  state.ram.splice(action, 1);
  state.storage.splice(action, 1);
  state.stock.splice(action, 1);
  state.quantity.splice(action, 1);
  state.id.splice(action, 1);
  state.price.splice(action, 1);
  localStorage.setItem("cart", JSON.stringify(state.productsName));
  localStorage.setItem("price", JSON.stringify(state.price));
  localStorage.setItem("storage", JSON.stringify(state.storage));
  localStorage.setItem("ram", JSON.stringify(state.ram));
  localStorage.setItem("id", JSON.stringify(state.id));
  localStorage.setItem("stock", JSON.stringify(state.stock));
  localStorage.setItem("quantity", JSON.stringify(state.quantity));
}

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductInfo: (state, action) => {
      let exProd = state.productsName.find(
        (curlElem, index) =>
          curlElem.id === action.payload.id &&
          state.ram[index] === action.payload.ram &&
          state.storage[index] === action.payload.storage
      );
      let exProd1;
      if (
        action.payload.productsName.category !== "laptops" &&
        action.payload.productsName.category !== "smartphones"
      ) {
        exProd1 = state.productsName.find(
          (curlElem, index) => curlElem.id === action.payload.id
        );
      }
      if (exProd) {
        // console.log(exProd + " inside exProd");

        state.productsName.map((id, index) => {
          if (id.id === action.payload.id) {
            state.quantity[index] += action.payload.quantity;
            localStorage.setItem("quantity", JSON.stringify(state.quantity));
          }
        });
      } else if (exProd1) {
        state.productsName.map((id, index) => {
          if (id.id === action.payload.id) {
            console.log(exProd1 + " inside exProd1");
            state.quantity[index] += action.payload.quantity;
            localStorage.setItem("quantity", JSON.stringify(state.quantity));
          }
        });
      } else {
        state.productsName.push(action.payload.productsName);
        state.ram.push(action.payload.ram);
        state.storage.push(action.payload.storage);
        state.price.push(action.payload.price);
        state.id.push(action.payload.id);
        state.stock.push(action.payload.stock);
        state.quantity.push(action.payload.quantity);
      }
    },
    setQuantityPlus: (state, action) => {
      state.quantity.map((id, index) => {
        if (
          state.quantity[action.payload.check] >=
          state.stock[action.payload.check]
        ) {
          state.quantity[action.payload.check] =
            state.stock[action.payload.check];
          localStorage.setItem("quantity", JSON.stringify(state.quantity));
        } else if (index === action.payload.check) {
          state.quantity[action.payload.check] += 1;
          localStorage.setItem("quantity", JSON.stringify(state.quantity));
        }
      });
    },
    quantityMinus: (state, action) => {
      state.quantity.map((id, index) => {
        if (state.quantity[action.payload.check1] <= 1) {
          // ItemsDeleted(state, action.payload.check1);
          state.quantity[action.payload.check1] = 1;
          // Router.reload("/cart");
        } else if (index === action.payload.check1) {
          state.quantity[action.payload.check1] -= 1;
          localStorage.setItem("quantity", JSON.stringify(state.quantity));
        }
      });
    },
    deleteItem: (state, action) => {
      ItemsDeleted(state, action.payload.item);
    },
    searchedItem: (state, action) => {
      state.searched = action.payload.item;
      localStorage.setItem("searched", JSON.stringify(state.searched));
    },
  },
});

export const { setProductInfo } = productReducer.actions;
export const { setQuantityPlus } = productReducer.actions;
export const { quantityMinus } = productReducer.actions;
export const { deleteItem } = productReducer.actions;
export const { searchedItem } = productReducer.actions;
export const selectProductName = (state) => state.product.productsName;

export default productReducer.reducer;
