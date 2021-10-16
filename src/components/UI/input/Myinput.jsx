import React from 'react'
import classes from './Myinput.module.css'

export default function Myinput(props) {
    return (
        <input className={classes.myInput} {...props}/>
    );
};
