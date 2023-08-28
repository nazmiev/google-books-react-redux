import React from "react";
import styles from "./Loadmore.module.scss"

type LoadmoreProps = {
  currentPage: number,
  onChangePage: (page: number) => void;
}

const Loadmore: React.FC<LoadmoreProps> = ({ currentPage, onChangePage }) => (
    <div className={styles.root}>
        <button onClick={() => onChangePage(currentPage + 1)}>Load more</button>
    </div>
//   <ReactPaginate
//     className={styles.root}
//     breakLabel="..."
//     nextLabel=">"
//     previousLabel="<"
//     onPageChange={(event) => onChangePage(event.selected + 1)}
//     pageRangeDisplayed={4}
//     pageCount={3}
//     forcePage={currentPage - 1}
//   />
)

export default Loadmore;