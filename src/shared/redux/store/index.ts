// Libs
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import categoryReducer from "../features/category/slice";
import sizeReducer from "../features/size/slice";
import currencyReducer from "../features/currency/slice";
import brandReducer from "../features/brand/slice";
import resourceReducer from "../features/resource/slice";
import userReducer from "../features/user/slice";
import productReducer from "../features/product/slice";
import genderReducer from "../features/gender/slice";
import orderReducer from "../features/order/slice";
import detailReducer from "../features/detail/slice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    size: sizeReducer,
    currency: currencyReducer,
    brand: brandReducer,
    resource: resourceReducer,
    user: userReducer,
    product: productReducer,
    gender: genderReducer,
    order: orderReducer,
    detail: detailReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
