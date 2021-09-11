import { createContext } from "react";

const AppContext = createContext();


const AppContextProvider = (({children, data}) => {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>
})


export { AppContextProvider };
export default AppContext;
