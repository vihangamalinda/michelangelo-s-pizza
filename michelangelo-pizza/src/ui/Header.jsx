import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
import logo from '../assets/logo_2.png';
function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-zinc-300 bg-indigo-500 p-4 uppercase sm:p-6">
      <Link to="/" className="font-bold tracking-widest text-indigo-200">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="logo"
            className="hidden max-w-[80px] rounded-3xl sm:block"
          />

          <p className="mx-3">To Michelangelo&apos;s Pizz 🍕</p>
        </div>
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
export default Header;
