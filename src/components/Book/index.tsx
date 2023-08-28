import React from "react";
import styles from "./Book.module.scss"

type BookProps = {
  id: string,
  volumeInfo: any,
  authors: any,
}

const Book: React.FC<BookProps> = ( obj ) => {

  return (
    <div className={styles.root}>
        <img src={ obj?.volumeInfo?.imageLinks?.smallThumbnail}/><br/>
        <span>{ obj?.volumeInfo?.categories?.length ? obj.volumeInfo.categories[0] : '' }</span><br/>
        <h4>{ obj?.volumeInfo?.title }</h4><br/>
        <p>{ obj?.volumeInfo?.authors?.length ? obj.volumeInfo.authors[0] : '' }</p><br/>
    </div>    
  );
}

export default Book;