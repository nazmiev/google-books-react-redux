import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { selectCartItemById } from "../../redux/cart/selectors";
// import { CartItem } from "../../redux/cart/types";
// import { addItem } from "../../redux/cart/slice";

// const typeNames = ["тонкое", "традиционное"];

type BookProps = {
  id: string,
  volumeInfo: any,
  authors: any,
}

const Book: React.FC<BookProps> = ( obj ) => {
  // const dispatch = useDispatch();
  // const cartItem = useSelector(selectCartItemById);
//   const cartItem = useSelector(selectCartItemById(id));
  // const [activeType, setActiveType] = React.useState(0);
  // const [activeSize, setActiveSize] = React.useState(0);

//   const addedCount = cartItem ? cartItem.count : 0;

//   const onClickAdd = () => {
//     const item: CartItem = {
//       id,
//       title,
//       price,
//       imageUrl,
//       size: sizes[activeSize],
//       type: typeNames[activeType],
//       count: 0
//     };
//     dispatch(addItem(item));
//   }

  return (
    <>
        <img src={ obj?.volumeInfo?.imageLinks?.smallThumbnail}/><br/>
        { obj?.volumeInfo?.categories[0] } <br/>
        { obj?.volumeInfo?.title }<br/>
        { obj?.volumeInfo?.authors[0] } <br/>
    </>    
  );
}

export default Book;