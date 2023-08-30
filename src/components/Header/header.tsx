import React from "react";
import { setCategoryValue } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/selectors";
import Search from "../Search";
import Categories from "../Categories/Categories";
import SortPopup from "../Sort/Sort";

function Header() {
  const dispatch = useAppDispatch();
  const { categoryValue, sort } = useSelector(selectFilter);

  const onChangeCategoryValue = React.useCallback((category: string) => {
    dispatch(setCategoryValue(category));
  }, []);

  return (
    <>
      <h1>Search for books</h1>
      <Search />
      <Categories value={categoryValue} onChangeCategoryValue={onChangeCategoryValue} />
      <SortPopup value={sort} />
    </>
  );
}

export default Header;