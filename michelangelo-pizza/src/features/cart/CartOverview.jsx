import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="bg-zinc-800 text-zinc-200">
      <p className="text-zinc-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
