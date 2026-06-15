import orderConfirmedIcon from "../assets/images/icon-order-confirmed.svg";

function ConfirmOrderComponent({ items, onStartNewOrder }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center">
      <button
        type="button"
        className="absolute inset-0 w-full h-full bg-black/50 border-none cursor-default"
        aria-label="Close"
        onClick={onStartNewOrder}
      />

      <div className="relative bg-white rounded-t-2xl lg:rounded-2xl p-6 lg:p-8 w-full lg:max-w-lg lg:mx-4 h-3/4 lg:h-auto overflow-y-auto animate-[slideUp_0.3s_ease-out] lg:animate-[fadeInUp_0.3s_ease-out]">
        <img src={orderConfirmedIcon} alt="Order Confirmed" className="size-12 mb-4" />

        <h2 className="text-4xl font-bold text-rose-900 leading-tight">Order Confirmed</h2>
        <p className="text-rose-400 mt-2 mb-6">We hope you enjoy your food!</p>

        <div className="bg-[#fcf8f5] rounded-xl p-5">
          {items.map((item, index) => (
            <div key={item.name}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <img src={item.thumbnail} alt={item.name} className="size-12 rounded-lg object-cover shrink-0" />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <p className="text-sm font-bold text-rose-900 truncate">{item.name}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-custom-red">{item.quantity}x</span>
                      <span className="text-rose-400">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <span className="text-base font-semibold text-rose-900 shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              {index < items.length - 1 && <hr className="my-3 border-t border-rose-100" />}
            </div>
          ))}

          <div className="flex items-center justify-between pt-4 mt-3 border-t border-rose-100">
            <span className="text-base text-rose-900">Order Total</span>
            <span className="text-2xl font-bold text-rose-900">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onStartNewOrder}
          className="w-full mt-6 py-3 rounded-full bg-custom-red text-white font-semibold text-base cursor-pointer hover:bg-[hsl(14,86%,32%)] transition-colors"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default ConfirmOrderComponent;
