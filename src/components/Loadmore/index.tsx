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
)

export default Loadmore;