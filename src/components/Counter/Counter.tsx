import React from 'react';
import styles from './Counter.module.css';
import Button from '../Button/Button';
import CounterDisplay from './CounterDisplay/CounterDisplay';

type CounterPropsType = {
    startValue: number
    maxValue: number
    currentValue: number | null
    setCurrentValue: (curValue: number) => void
    error: string
}

const Counter = (props: CounterPropsType) => {

     const onClickResetButtonHandler = () => {
        props.setCurrentValue(props.startValue)
    }

    const onClickIncButtonHandler = (value: number | null) => {
        if (value !== null) {
            if (value < props.maxValue) value += 1
            props.setCurrentValue(value)
        }

    }

    return (
        <div className={styles.counter}>
            <div className={styles.counterContainer}>
                <CounterDisplay currentValue={props.currentValue} maxValue={props.maxValue} error={props.error}/>
                <div className={styles.buttonsBlock}>
                    <Button buttonTitle={'inc'} disabled={props.currentValue !== null && props.currentValue >= props.maxValue} callback={() => onClickIncButtonHandler(props.currentValue)} />
                    <Button buttonTitle={'reset'} disabled={props.currentValue === props.startValue} callback={onClickResetButtonHandler} />
                </div>
            </div>
        </div>
    );
};

export default Counter;