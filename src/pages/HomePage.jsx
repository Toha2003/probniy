import { useContext } from "react";
import ProductCard from "../components/card/ProductCard";
import { productData } from "../data/productData";
import { LanguageContext } from "../context/Contexts";

const HomePage = () => {
  const {lang} = useContext(LanguageContext)
   
  return (
    <div style={{paddingTop:"100px"}}>
      <div>
        <h1>{lang.allProduct}</h1>
      </div>

      <div className="row">
        {productData.map((el, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3  my-4 " key={el.id}>
            <ProductCard {...el} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
