import AddToCartComponent from "./AddToCartComponent";

function FoodCardComponent({ imageUrl, name, category, price, cartItems, onAddItem, onRemoveItem, onDeleteItem }) {
  const cartItem = cartItems.find((item) => item.name === name);
  const added = !!cartItem;
  const count = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex flex-col gap-2 rounded-2xl">
      <div className="relative flex flex-col items-center mb-6">
        <img
          src={imageUrl}
          alt={name}
          className={`w-full h-auto rounded-xl object-cover border-2 transition-all duration-200 ${
            added ? "border-amber-700" : "border-transparent"
          }`}
        />
        <div className="absolute -bottom-6">
          <AddToCartComponent added={added} count={count} onAddItem={onAddItem} onRemoveItem={onRemoveItem} onDeleteItem={onDeleteItem} />
        </div>
      </div>
      <p className="text-sm text-amber-800 font-medium pt-2">{category}</p>
      <h2 className="text-lg font-semibold text-amber-900 leading-snug">{name}</h2>
      <p className="text-md font-bold text-amber-700">${price.toFixed(2)}</p>
    </div>
  );
}

export default FoodCardComponent;
