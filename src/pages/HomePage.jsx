import ProductCard from "../components/card/ProductCard"
import { productData } from "../data/product"

const HomePage = () => {
  return (
    <div>
      <div>

      <h1>All Products</h1>
      </div>

      <div className="row d-flex">
        {productData.map((el,index)=>(
          <div  className="col-12 col-sm-6 col-md-4 col-lg-3  my-4 " key={el.id}>
            <ProductCard {...el} index={index}/>
          </div>
        ))}
      </div>


    </div>
  )
}

export default HomePage
