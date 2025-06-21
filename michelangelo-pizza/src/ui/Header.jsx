import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
function Header() {
  return (
    <header className="bg-indigo-500 uppercase">
      <Link to="/" className="font-bold tracking-widest">
        To Michelangelo&apos;s Pizz 🍕
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
