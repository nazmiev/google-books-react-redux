import Search from "../Search";
import SortPopup from "../Sort/Sort";
import Categories from "../Categories/Categories";

function Header() {
  return (
    <>
      <h1>Search for books</h1>
      <Search />
      <Categories/>
      <SortPopup/>
    </>
  );
}

export default Header;