import { formatCurrency } from '../../utilities/helpers.js';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(ingredients);
  console.log(isLoadingIngredients);
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      {!isLoadingIngredients && (
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(',')}
        </p>
      )}
    </li>
  );
}

export default OrderItem;
