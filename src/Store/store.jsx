import { createStore } from "redux";
import Reducer from "../Redux/reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
