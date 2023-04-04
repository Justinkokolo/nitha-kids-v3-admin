// Libs
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Type } from "../../../constants/alert";
import type { RootState } from "../../store";

// Utils
import {
  loadProducts,
  addProduct,
  addPicture,
  editPicture,
  loadProduct,
  deleteProduct,
  updateProduct,
  searchProducts,
  loadProductsByCategory
} from "./calls";
import { IProduct } from '../../../../types/index';

// Define a type for the product state
interface ProductState {
  products: {
    data: IProduct[];
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  product: {
    data?: IProduct | undefined;
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  };
  picture: {
    status: string;
    alert: {
      type?: Type;
      message: string;
    };
  },
  category: {
    name: string,
    id: number
  } | null;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: {
    data: [],
    status: "",
    alert: {
      message: "",
    },
  },
  product: {
    data: undefined,
    status: '',
    alert: {
      message: ''
    },
  },
  picture: {
    status: "",
    alert: {
      message: "",
    },
  },
  category: null
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setProduct: (
      state,
      action: PayloadAction<{
        data?: IProduct | undefined;
        status: string;
        alert: {
          type?: Type;
          message: string;
        };
      }>
    ) => {
      state.product = {
        ...state.product,
        // @ts-ignore
        data: action.payload
      };
    },
    setProducts: (
      state,
      action: PayloadAction<IProduct[]>
    ) => {
      state.products = {
        ...state.products,
        data: action.payload
      };
    },
  },
  extraReducers: (builder) => {
    // GET PRODUCTS
    builder.addCase(loadProducts.pending, (state) => {
      state.products.status = "loading";
      state.products.alert = initialState.products.alert;
    });
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.products.data = action.payload["products"];
      state.products.status = "success";
    });
    builder.addCase(loadProducts.rejected, (state) => {
      state.products.status = "failed";
    });
    // GET PRODUCT
    builder.addCase(loadProduct.pending, (state) => {
      state.product.status = "loading";
      state.product.alert = initialState.products.alert;
    });
    builder.addCase(loadProduct.fulfilled, (state, action) => {
      state.product.data = action.payload["product"];
      state.product.status = "success";
    });
    builder.addCase(loadProduct.rejected, (state) => {
      state.product.status = "failed";
    });
    // STORE
    builder.addCase(addProduct.pending, (state) => {
      state.products.status = "loading";
      state.products.alert = initialState.products.alert;
    });
    builder.addCase(addProduct.fulfilled, (state) => {
      state.products.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a product",
      };
      state.products.alert = alert;
    });
    builder.addCase(addProduct.rejected, (state) => {
      state.products.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.products.alert = alert;
    });
    // STORE PICTURE
    builder.addCase(addPicture.pending, (state) => {
      state.picture.status = "loading";
      state.picture.alert = initialState.product.alert;
    });
    builder.addCase(addPicture.fulfilled, (state) => {
      state.picture.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a picture",
      };
      state.picture.alert = alert;
    });
    builder.addCase(addPicture.rejected, (state) => {
      state.picture.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.picture.alert = alert;
    });
    // UDPATE PICTURE
    builder.addCase(updateProduct.pending, (state) => {
      state.product.status = "loading";
      state.product.alert = initialState.product.alert;
    });
    builder.addCase(updateProduct.fulfilled, (state) => {
      state.product.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully update the product",
      };
      state.product.alert = alert;
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.product.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.product.alert = alert;
    });
    // EDIT PICTURE
    builder.addCase(editPicture.pending, (state) => {
      state.picture.status = "loading";
      state.picture.alert = initialState.products.alert;
    });
    builder.addCase(editPicture.fulfilled, (state) => {
      state.picture.status = "success";
      const alert = {
        type: Type.Success,
        message: "You have successfully added a picture",
      };
      state.picture.alert = alert;
    });
    builder.addCase(editPicture.rejected, (state) => {
      state.picture.status = "failed";
      const alert = {
        type: Type.Error,
        message: "An error has occurred",
      };
      state.picture.alert = alert;
    });
    // DELETE PRODUCT
    builder.addCase(deleteProduct.pending, (state) => {
      state.product.status = "loading";
      state.product.alert = initialState.products.alert;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.product.status = "success";
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.product.status = "failed";
    });
    // SEARCH PRODUCTS
    builder.addCase(searchProducts.pending, (state) => {
      state.products.status = "loading";
      state.products.alert = initialState.products.alert;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products.data = action.payload["products"];
      state.products.status = "success";
    });
    builder.addCase(searchProducts.rejected, (state) => {
      state.products.status = "failed";
    });
    // GET PRODUCTS BY CATEGORY
    builder.addCase(loadProductsByCategory.pending, (state) => {
      state.products.status = "loading";
      state.products.alert = initialState.products.alert;
    });
    builder.addCase(loadProductsByCategory.fulfilled, (state, action) => {
      state.products.data = action.payload["products"];
      state.category = action.payload["category"];
      state.products.status = "success";
    });
    builder.addCase(loadProductsByCategory.rejected, (state) => {
      state.products.status = "failed";
    });
  },
});

export const { setProduct, setProducts } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProduct = (state: RootState) => state.product.products;

export default productSlice.reducer;
