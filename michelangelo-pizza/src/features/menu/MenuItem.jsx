/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utilities/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import { getCurrentQuantityById } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddCart = () => {
    const item = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(item));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart &&(
            <div className='felx gap-3 items-center sm:gap-8'>
              <UpdateItemQuantity
                pizzaId={id}
                currentItemQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          ) }
          {!soldOut && !isInCart ? (
            <Button type="small" onClick={handleAddCart}>
              Add to cart
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
