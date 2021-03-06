import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import products from "./products_reducer";
import ui from "./ui_reducer";
import likedProducts from "./likes_reducer";
import users from "./users_reducer";

const RootReducer = combineReducers({
  session,
  users,
  products,
  ui,
  errors,
  likedProducts
});

export default RootReducer;