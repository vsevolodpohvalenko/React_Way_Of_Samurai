import React from 'react'

import s from './Pagenator.module.css'

const Pagenator = ({totalUsersCount,pageSize,currentPage, onPageChanged,...props}) => {
    let pagesCount = Math.ceil ((totalUsersCount/10) / pageSize);
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.item}>
        {pages.map(p => {
            return <span className={currentPage === p && s.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p);
                         }}>{p}  </span>
        })}
    </div>
}
export default Pagenator;