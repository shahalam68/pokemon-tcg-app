import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import React from "react";

const Cart: React.FC<any>  = ({handleCloseCart}) => {
  
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-4">
        <div className="bg-white shadow-md rounded-2xl overflow-hidden">
          <div className="flex flex-col h-full max-h-[90vh]">
            <div className="flex items-start justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 ">
                Shopping Cart
              </h2>
              <button
              onClick={handleCloseCart}
                type="button"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close panel</span>
                <button>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {
                  cart.length ===0 ? (<h1 className="font-medium text-gray-900">Cart is empty !!!</h1>):
                  cart.map(item =><li className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md ">
                    <img
                      src={item.images.logo}
                      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        {item.name}
                      </h3>
                      <p className="ml-4">$90.00</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty 1</p>
                      <button
                        type="button"
                        className="font-medium text-yellow-600 hover:text-yellow-600"
                        onClick={()=>removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li> )
                }
                
              </ul>
            </div>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$122.00</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-600"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-yellow-600 hover:text-yellow-600"
                  >
                    Continue Shopping <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
