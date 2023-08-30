import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useAppDispatch } from "./redux/store";
import { selectFilter } from "./redux/filter/selectors";
import { selectBooksData } from "./redux/books/selectors";
import { fetchBooks } from "./redux/books/asyncActions";
import { SearchBooksParams } from "./redux/books/types";
import './App.scss'
import Book from "./components/Book";
import Skeleton from "./components/Book/skeleton";
import Loadmore from "./components/Loadmore";
import Header from "./components/Header/header";

function App() {
  const dispatch = useAppDispatch();
  const { items, counter, status } = useSelector(selectBooksData);
  const { categoryValue, sort, currentPage, searchValue } = useSelector(selectFilter);

  const getBooks = async () => {
    const params: SearchBooksParams = {
          q: searchValue ? searchValue : "*",
          subject: categoryValue ? categoryValue : "",
          startIndex: currentPage != 1 ? 30 * currentPage : 0,
          sortBy: sort.sortProperty
    }
    dispatch(fetchBooks(params))
  }

  React.useEffect(() => {
    getBooks();
  }, [categoryValue, sort.sortProperty, searchValue, currentPage]);
  
  const books = items.map((obj: any) => (<Book key={obj.id} {...obj} />));
  const skeletons = [...new Array(6)].map((_, index) => (<Skeleton key={index} />));

  return (
    <>
      <Header />
      {status === 'error' ?
        (<h2>no books <span>😕</span></h2>)
        : (<>
          <h2>Books found {counter}</h2>
          <div className="content__items">{status === 'loading' ? skeletons : books}</div>
        </>)
      }
      <Loadmore/>
    </>
  );
};

export default App
