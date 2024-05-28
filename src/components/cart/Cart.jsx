import { useCart } from "../../context/CartContext";

const Cart = () => {
    const { cartItems, removeItemFromCart } = useCart();

    const handleRemoveItem = (itemId) => {
        removeItemFromCart(itemId);
    };

    return (
        <div className="">
            <h2 className="text-center">Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <div className="d-flex flex-column justify-content-center  container-fluid mt-2 ">
                    {cartItems.map((item) => (
                        <div key={item.id} className="border border-3 mt-2 d-flex ">
                            <div>
                                <img
                                    src={item.image?.url}
                                    alt={item.title}
                                    style={{ width: "100px" }}
                                    className="mt-2 ms-2"
                                />
                            </div>
                            <div>
                                <p className="fw-bolder fs-4 ms-2">{item.name}</p>
                                <div className="d-flex">
                                    {item.price && (
                                        <h6 className=" fw-bold my-4">
                                            {item.price.formatted_with_symbol}
                                        </h6>
                                    )}
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="rounded fw-bold btn bg-danger text-light ms-3 mb-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
