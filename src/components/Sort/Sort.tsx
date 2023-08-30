import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortPropertyEnum } from "../../redux/filter/types";
import { setSort } from "../../redux/filter/slice";
import styles from "./Sort.module.scss"
import { selectFilter } from "../../redux/filter/selectors";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
}


export const sortList: SortItem[] = [
  { name: "relevance", sortProperty: SortPropertyEnum.RELEVANCE },
  { name: "newest", sortProperty: SortPropertyEnum.NEWEST },
];

const SortPopup:React.FC = React.memo(
  ({ }) => {
    const { sort } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const sortRef = React.useRef<HTMLDivElement>(null);
  
    const [open, setOpen] = React.useState(false);
  
    const onClickListItems = (obj: SortItem) => {
      dispatch(setSort(obj));
      setOpen(false);
    };
  
    React.useEffect(() => {
      const handleClickOutside: EventListenerOrEventListenerObject = (event) => {
        let path;
        if (sortRef.current) {
          path = event.composedPath().includes(sortRef.current);
        }
        if (!path) {
          setOpen(false);
        }
      };
  
      document.body.addEventListener('click', handleClickOutside);
  
      return () => document.body.removeEventListener('click', handleClickOutside);
    }, [])
  
    return (
      <div ref={sortRef} className={styles.sort}>
        <div className={styles.sort__label}>
          <b>Sort by: </b>
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className={styles.sort__popup}>
            <ul>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItems(obj)}
                  className={
                    sort.sortProperty === obj.sortProperty ? styles.active : ""
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
)

export default SortPopup;