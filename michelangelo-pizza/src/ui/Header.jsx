import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';
import logo from '../assets/logo_2.png';
function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-amber-300 bg-amber-500 p-4 uppercase sm:p-6">
      <Link to="/" className="font-extrabold tracking-widest text-stone-700">
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
