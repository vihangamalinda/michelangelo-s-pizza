import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity
 from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
function CartItem({ item }) {
  const dispatch = useDispatch();
  const currentItemQuantity = useSelector(getCurrentQuantityById(item.pizzaId))
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentItemQuantity={currentItemQuantity}/>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
