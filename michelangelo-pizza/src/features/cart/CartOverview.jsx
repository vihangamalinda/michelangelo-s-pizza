import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartItems, getTotalPrice } from './cartSlice';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartItems);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-zinc-800 px-4 py-4 text-sm uppercase text-zinc-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-zinc-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
