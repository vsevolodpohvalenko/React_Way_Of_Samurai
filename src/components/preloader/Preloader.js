import React from 'react'
import s from "./Preloader.module.css"
import preloader from '../../assets/Preloaders.gif'
let Preloader = () => {
    return <img className={s.Preloader} src={preloader}/>
}
export default Preloader;