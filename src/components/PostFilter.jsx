import React from 'react'
import Myinput from "../components/UI/input/Myinput";
import MySelect from "../components/UI/select/MySelect";
export default function PostFilter({filter, setFilter}) {
    return (
        <div>
        <Myinput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})} 
          placeholder="Поиск..."
        />
        <MySelect
          value = {filter.sort}
          onChange = {selectedSort => setFilter({...filter,sort:selectedSort})} 
          defaultValue="Сортировка"
          options={[
            {value:'title', name: 'По названию'},
            {value:'body', name: 'По описанию'},
          ]}
        />
      </div>
    )
}
