import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from 'redux/selectors';
import { addFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput value={value} onChange={(e) => {
          dispatch(addFilter(e.currentTarget.value));
        }} name="filter" type="text" />
    </FilterLabel>
  );
};

export default Filter;
