import React from 'react';
import styles from './Button.module.css';

type ButtonPropsType = {
    buttonTitle: string
    callback: () => void
    disabled: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.callback} disabled={props.disabled} className={styles.button}>
            {props.buttonTitle}
        </button>
    );
};

export default Button;