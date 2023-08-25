import React from "react";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux/es/exports";
import { selectBooksData } from "./redux/books/selectors";
import './App.scss'
import { fetchBooks } from "./redux/books/asyncActions";
import Book from "./components/Book";
import Skeleton from "./components/Book/skeleton";
import Header from "./components/header";
import { selectFilter } from "./redux/filter/selectors";
import Categories from "./components/Categories";
// import { setCategoryId, setCurrentPage } from "./redux/filter/slice";
import { setCategoryId } from "./redux/filter/slice";
import SortPopup from "./components/Sort";

function App() {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectBooksData);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  // const onChangePage = (page: number) => {
  //   dispatch(setCurrentPage(page));
  // };

  const getBooks = async () => {
    const sortBy = sort.sortProperty;
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&q=${searchValue}` : "";

    dispatch(
      fetchBooks({
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    )
  }

  React.useEffect(() => {
    getBooks();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const books = items?.length ? items.map((obj: any) => (<Book key={obj.id} {...obj} />)) : [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <SortPopup value={sort} />
          </div>
          {status === 'error' ?
            (<h2 className="content__items_error">no books <span>😕</span></h2>)
            : (<>
              <h2 className="content__title">Books</h2>
              <div className="content__items">{status === 'loading' ? skeletons : books}</div>
            </>)
          }
          {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
        </div>
      </div>
    </div>


  );
};

export default App
