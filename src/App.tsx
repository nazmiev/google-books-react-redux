import React from "react";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux/es/exports";
import { selectBooksData } from "./redux/books/selectors";
import './App.css'
import { fetchBooks } from "./redux/books/asyncActions";
import Book from "./components/Book";
import Skeleton from "./components/Book/skeleton";
import Header from "./components/header";

function App() {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectBooksData);

  // const onChangeCategory = React.useCallback((id: number) => {
  //   dispatch(setCategoryId(id));
  // }, []);

  // const onChangePage = (page: number) => {
  //   dispatch(setCurrentPage(page));
  // };

  const getBooks = async () => {
    // const sortBy = 'ask';
    // const category = "";
    // const search = "";
    // const currentPage = 1;
    // const sortBy = sort.sortProperty;
    // const category = categoryId > 0 ? `category=${categoryId}` : "";
    // const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchBooks()
    )
    // dispatch(
    //   fetchBooks({
    //     sortBy,
    //     category,
    //     search,
    //     currentPage: String(currentPage),
    //   })
    // )
  }

  React.useEffect(() => {
    getBooks();
  }, [0, 'ask', '', 1]);

  const books = items.map((obj: any) => (<Book key={obj.id} {...obj} />));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {/* <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div> */}
          <h2 className="content__title">Книги</h2>
          {status === 'error' ?
            (<h2 className="content__items_error">Ошибка загрузки <span>😕</span></h2>)
            : (<div className="content__items">{status === 'loading' ? skeletons : books}</div>)
          }
          {/* <Pagination currentPage={currentPage} onChangePage={onChangePage} /> */}
        </div>
      </div>
    </div>


  );
};

export default App
