import Search from "./Search";

function Header() {
  return (
    <div className="header">
      <div className="container">
          <div className="header__logo">
            <div>
              <h1>Search for books</h1>
            </div>
          </div>
        <Search />
      </div>
    </div>
  );
}

export default Header;