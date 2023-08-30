import { useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/filter/slice";
import { useAppDispatch } from "../../redux/store";
import styles from "./Loadmore.module.scss"
import { selectFilter } from "../../redux/filter/selectors";

function Loadmore() {
  const dispatch = useAppDispatch();
  const { currentPage} = useSelector(selectFilter);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <div className={styles.root}>
        <button onClick={() => onChangePage(currentPage + 1)}>Load more</button>
    </div>
  )
}

export default Loadmore;