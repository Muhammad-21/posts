import React from 'react'
import classes from './Mybutton.module.css'
export default function Mybutton({children, style, onClick, ...props}) {
    return (
        <button style={style} onClick={onClick} className={classes.myBtn}>
            {children}
        </button>
    )
}
