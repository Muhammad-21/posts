import React from 'react'
import classes from './Mybutton.module.css'
export default function Mybutton({children, onClick, ...props}) {
    return (
        <button onClick={onClick} className={classes.myBtn}>
            {children}
        </button>
    )
}
