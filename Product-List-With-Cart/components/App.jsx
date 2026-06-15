import { useState } from "react";
import data from "../data.json";
import { resolveImage } from "../imageImports";
import AttributionComponent from "./AttributionComponent";
import CartComponent from "./CartComponent";
import ConfirmOrderComponent from "./ConfirmOrderComponent";
import FoodCardComponent from "./FoodCardComponent";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleAddItem = (name, price, thumbnail) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) => (item.name === name ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prev, { name, price, thumbnail, quantity: 1 }];
    });
  };

  const handleRemoveItem = (name) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing && existing.quantity > 1) {
        return prev.map((item) => (item.name === name ? { ...item, quantity: item.quantity - 1 } : item));
      }
      return prev.filter((item) => item.name !== name);
    });
  };

  const handleDeleteItem = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const handleConfirmOrder = () => {
    setShowConfirm(true);
  };

  const handleStartNewOrder = () => {
    setCartItems([]);
    setShowConfirm(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#fcf8f5] overflow-x-hidden py-8 lg:py-16 px-4 font-sans">
      <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col flex-2">
          <h1 className="pb-6 lg:pb-8 font-extrabold text-3xl lg:text-5xl text-yellow-950">Desserts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
              <FoodCardComponent
                key={item.name}
                imageUrl={resolveImage(item.image.desktop)}
                thumbnailUrl={resolveImage(item.image.thumbnail)}
                name={item.name}
                category={item.category}
                price={item.price}
                cartItems={cartItems}
                onAddItem={() => handleAddItem(item.name, item.price, resolveImage(item.image.thumbnail))}
                onRemoveItem={() => handleRemoveItem(item.name)}
                onDeleteItem={() => handleDeleteItem(item.name)}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex-1">
          <CartComponent items={cartItems} onDeleteItem={handleDeleteItem} onConfirmOrder={handleConfirmOrder} />
        </div>
      </div>
      <AttributionComponent className="text-amber-700" linkClassName="text-yellow-400" />

      {showConfirm && (
        <ConfirmOrderComponent items={cartItems} onStartNewOrder={handleStartNewOrder} />
      )}
    </div>
  );
}

export default App;
