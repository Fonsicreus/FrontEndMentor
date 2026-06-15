import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "../assets/images/icon-remove-item.svg";
import carbonNeutralIcon from "../assets/images/icon-carbon-neutral.svg";

function CartComponent({ items, onDeleteItem, onConfirmOrder }) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-amber-700">Your Cart ({totalItems})</h2>

      {totalItems === 0 ? (
        <>
          <div className="flex justify-center my-8">
            <img src={emptyCartIcon} alt="Empty Cart" className="w-32 h-auto" />
          </div>
          <p className="text-sm text-center font-semibold text-amber-800">Your added items will appear here</p>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.name}>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-lm font-bold text-amber-900">{item.name}</p>
                  <div className="flex items-center gap-2 text-lm">
                    <span className="font-semibold text-amber-800">{item.quantity}x</span>
                    <span className="text-amber-900">@ ${item.price.toFixed(2)}</span>
                    <span className="font-semibold text-amber-700">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onDeleteItem(item.name)}
                  className="shrink-0 size-5 rounded-full border border-amber-900 flex items-center justify-center cursor-pointer hover:border-amber-900 transition-colors"
                  aria-label="Remove item"
                >
                  <img src={removeItemIcon} alt="Remove" className="size-3" />
                </button>
              </div>
              <hr className="mt-4 border-t border-gray-700" />
            </div>
          ))}

          <div className="flex items-center justify-between pt-2">
            <span className="text-lg text-amber-900">Order Total</span>
            <span className="text-3xl font-bold text-gray-90000">${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-[#fcf8f5] py-3 rounded-lg mt-4">
            <img src={carbonNeutralIcon} alt="Carbon neutral" className="size-5" />
            <p className="text-lm text-amber-800">
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>

          <button
            type="button"
            onClick={onConfirmOrder}
            className="w-full mt-4 py-3 rounded-full bg-amber-700 text-white font-semibold text-base cursor-pointer hover:bg-amber-800 transition-colors"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CartComponent;
