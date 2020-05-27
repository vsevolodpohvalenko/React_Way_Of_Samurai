import React, {useState} from 'react'
import cn from "classnames";
import s from './Pagenator.module.css'

const Pagenator = ({totalItemsCount,pageSize,currentPage, onPageChanged, portionSize = 10}) => {
let PageCount = Math.ceil(totalItemsCount / pageSize)
let PortionCount = Math.ceil(PageCount / portionSize)
let [PortionNumber, setPortionNumber] = useState(1)
let leftPortionElement =  (PortionNumber -1) * portionSize +1
let rightPortionElement = PortionNumber * portionSize
let page=[]
for (let i = 1; i< PageCount; i++){
page.push(i)
}
return <div className={s.paginator}>
    {PortionNumber > 1 &&
    <button className={s.Buttons} onClick={() =>setPortionNumber(PortionNumber -1 )}>Next</button>}
    {page.filter(p=> p>= leftPortionElement && p<=rightPortionElement).map(
        p =>
        <span key={p} className={ cn({ [s.selectedPage] : currentPage === p}, s.pageNumber)} onClick={(e) => {onPageChanged(p)}}>{p}</span>
    )}
    {PortionNumber < PortionCount &&
    <button className={s.Buttons} onClick={() => setPortionNumber(PortionNumber +1)}>Next one</button>}
</div>

}

export default Pagenator;