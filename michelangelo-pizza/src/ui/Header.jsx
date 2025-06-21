import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
function Header() {
  return (
    <header className="border-b-4 border-zinc-300 bg-indigo-500 p-4 uppercase sm:p-6">
      <Link to="/" className="font-bold tracking-widest text-indigo-200">
        To Michelangelo&apos;s Pizz 🍕
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
