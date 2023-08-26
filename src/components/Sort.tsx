import React from "react";
import { useDispatch } from "react-redux";
import { Sort, SortPropertyEnum } from "../redux/filter/types";
import { setSort } from "../redux/filter/slice";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
}

type SortPopupProps = {
  value: Sort
}

export const sortList: SortItem[] = [
  { name: "relevance", sortProperty: SortPropertyEnum.RELEVANCE },
  { name: "newest", sortProperty: SortPropertyEnum.NEWEST },
];

const SortPopup:React.FC<SortPopupProps> = React.memo(
  ({ value }) => {
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
      <div ref={sortRef} className="sort">
        <div className="sort__label">
          <b>Sort by: </b>
          <span onClick={() => setOpen(!open)}>{value.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {sortList.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItems(obj)}
                  className={
                    value.sortProperty === obj.sortProperty ? "active" : ""
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