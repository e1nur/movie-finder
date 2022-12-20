import React from 'react';
import {useSelector} from "react-redux";
import { Movie } from "../components/Movie";

export const WatchList = () => {


  const {watchlist} = useSelector((state) => state.watchList)
  console.log(watchlist)

  const watchListItem = watchlist.map((item) => <Movie key={item.id} {...item}/>)


  return (
    <section>
      <div className={'flex flex-wrap'}>
        {
          watchlist.length === 0 ? <div className={'text-4xl'}>Empty</div> : watchListItem
        }
      </div>
    </section>
  )
}