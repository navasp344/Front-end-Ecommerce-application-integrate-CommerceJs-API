import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Products.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="product_main border-0">
                <div className="col border-0">
                    <div className="card border-0 h-100 ">
                        <div className="my-3">
                            <div className="card  text-center h-100 mx-3" key={product.id} style={{ width: 240 }}>
                                <div><img className="card-img-top  mt-3 " src={product.image?.url} alt={product.name} height="220px" style={{ width: 200 }} /></div>
                                <div className="card-body">
                                    <Link className="card-title mb-0 text-decoration-none" to={/products/ + product.id} >{product.name.substring(0, 12)}...</Link>
                                    <p className="card-text lead fw-bold">{product.price.formatted_with_symbol} </p>
                                    <a href="#" className="btn btn-outline-dark">Buy Now  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
