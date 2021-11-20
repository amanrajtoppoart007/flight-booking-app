import {configureStore} from '@reduxjs/toolkit';
import addressReducer from '../slices/Address.slice';
import authReducer from '../slices/Auth.slice';
import cartReducer from '../slices/Cart.slice';
import categoryReducer from '../slices/Category.slice';
import ordersReducer from '../slices/Order.slice';
import productReducer from '../slices/Products.slice';
import wishlistReducer from '../slices/Wishlist.slice';
import notificationReducer from '../slices/Notification.slice';

const rootReducer = {
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
  category: categoryReducer,
  wishlist: wishlistReducer,
  orders: ordersReducer,
  notifications: notificationReducer,
};

const store = configureStore({
  reducer: {
    ...rootReducer,
  },
});

export default store;
