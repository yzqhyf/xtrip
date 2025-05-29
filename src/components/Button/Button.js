import React from 'react'
import styles from './Button.module.scss'

export const Button = (props) => {
    const { className, children } = props
    const classes = styles[className] || styles.default 

    return (
        <button type="button" className={classes}>{children}</button>
    )
}
