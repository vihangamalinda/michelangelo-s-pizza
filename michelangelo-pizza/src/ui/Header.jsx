import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder";
function Header(){
    return(
        <header>
            <Link to="/">To Michelangelo&apos;s Pizz 🍕</Link>
            <SearchOrder/>
            <p>Vihanga</p>
        </header>
    )
}
export default Header;