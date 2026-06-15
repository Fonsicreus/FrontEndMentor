import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";

function AddToCartComponent({ added, count, onAddItem, onRemoveItem }) {
  const handleAddToCart = () => {
    if (onAddItem) onAddItem();
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (onRemoveItem) onRemoveItem();
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (onAddItem) onAddItem();
  };

  if (!added) {
    return (
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex items-center justify-center gap-2 w-40 h-10 rounded-4xl border border-amber-700 bg-white text-black hover:text-amber-700 hover:border-amber-700 transition-colors cursor-pointer"
      >
        <img src={addToCartIcon} alt="Add to cart" />
        <p className="text-sm font-semibold">Add to Cart</p>
      </button>
    );
  } else {
    return (
      <div className="flex items-center justify-between w-40 h-10 px-4 rounded-4xl bg-amber-700 text-white">
        <button
          type="button"
          onClick={handleDecrement}
          className="flex items-center justify-center size-6 rounded-full border border-white cursor-pointer"
          aria-label="Decrement"
        >
          <img src={decrementIcon} alt="Decrement" />
        </button>

        <p className="text-sm font-semibold select-none">{count}</p>

        <button
          type="button"
          onClick={handleIncrement}
          className="flex items-center justify-center size-6 rounded-full border border-white cursor-pointer"
          aria-label="Increment"
        >
          <img src={incrementIcon} alt="Increment" />
        </button>
      </div>
    );
  }
}

export default AddToCartComponent;
