import { createContext, useState } from "react";
import { userRows, products } from "./data";

const initialUsersState = userRows;
const initialProductsState = products;

export const UserContext = createContext();
export const ProductContext = createContext();

function Store({ children }) {
  const [userState, setUserState] = useState(initialUsersState);
  const [productState, setProductState] = useState(initialProductsState);

  return (
    <UserContext.Provider value={[userState, setUserState]}>
      <ProductContext.Provider value={[productState, setProductState]}>
        {children}
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default Store;
