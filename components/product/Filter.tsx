import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { useGetCategoriesQuery } from "../../redux/api/apiSlice";
import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { setFilter } from "../../redux/features/filter/filterSlice";
import { ALL_CATEGORY } from "../../utils/type";

const Filter = () => {
  const [category, setCategory] = useState(ALL_CATEGORY);
  const dispatch = useAppDispatch();

  const { data }: UseQueryHookResult<any, any> = useGetCategoriesQuery(1);

  const categories = data ? [ALL_CATEGORY, ...data] : [];

  useEffect(() =>{
    dispatch(setFilter(category));
  },[category, dispatch])

  return (
    <div className="flex px-8  p-4">
      <div className="mr-4">
        <label className="font-semibold">Categories: </label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="p-2 border rounded-md"
        >
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
