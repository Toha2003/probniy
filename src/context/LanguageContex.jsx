import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageContexProvider = ({ children }) => {

    const[langType, setLangType] = useState("en")
    let lang

    if(langType==="en"){
        // lang= EN
    }else{
        // lang=UZ
    }
  return (
    <LanguageContext.Provider value={{ type: "en" }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContexProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContexProvider;
