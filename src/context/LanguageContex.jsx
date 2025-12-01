import PropTypes from "prop-types";
import {  useState } from "react";
import { EN } from "../data/ENLanguage";
import { UZ } from "../data/UZLanguage";
import { LanguageContext } from "./Contexts";

const LanguageContexProvider = ({ children }) => {

    const[langType, setLangType] = useState(localStorage.getItem("lang") || "En")
    const languages = {
      En:EN,
      Uz:UZ
    }

    const state = {langType, lang:languages[langType],setLangType}
  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContexProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContexProvider;
