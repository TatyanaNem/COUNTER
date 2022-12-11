import React from 'react';
import styles from './CounterDisplay.module.css';

type CounterDisplayPropsType = {
    currentValue: number | null | string
    maxValue: number
    error: string
}

const CounterDisplay = (props: CounterDisplayPropsType) => {
    return (
        <div className={styles.counterDisplay}>
            <div className={props.currentValue !== props.maxValue ? styles.displayValue : styles.displayValueRed}>
                {props.currentValue === null ? <span className={props.error ? styles.spanWithError : styles.span}>{props.error ? props.error : 'enter values and press SET'}</span> : props.currentValue}
            </div>
        </div>
    );
};

export default CounterDisplay;