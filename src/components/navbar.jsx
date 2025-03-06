import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Store className="h-8 w-8 text-green-900" />
            <span className="ml-2 text-xl font-bold text-green-600">GUVI STORE</span>
          </Link>
          <Link to="/cart" className="flex items-center">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-green-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {itemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}