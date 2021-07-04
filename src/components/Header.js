import SearchBar from "./SearchBar";
import '../styles/home.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__logo">RASS</h1>
            <SearchBar />
        </header>
    );
}

export default Header;
