import React, {ChangeEvent} from 'react';
import styles from './SettingsDisplay.module.css';

type SettingsDisplayPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCurrentValue: (curValue: number | null) => void
    error: string
    setError: (errorMessage: string) => void
}

const SettingsDisplay = (props: SettingsDisplayPropsType) => {

    const onChangeMaxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        props.setMaxValue(newValue)
        props.setCurrentValue(null)
        newValue < 0 || newValue <= props.startValue ? props.setError('Incorrect value!') : props.setError('')
    }

    const onChangeStartValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value)
        props.setStartValue(newValue)
        props.setCurrentValue(null)
        newValue < 0 || newValue >= props.maxValue ? props.setError('Incorrect value!') : props.setError('')
    }

    return (
        <div className={styles.settingsDisplay}>
            <div className={styles.inputWrapper}>
                <span className={styles.text}>max value:</span>
                <input
                    value={props.maxValue}
                    type="number"
                    className={props.error ? styles.inputError : styles.input}
                    onChange={onChangeMaxValueInputHandler}
                />
            </div>
            <div className={styles.inputWrapper}>
                <span className={styles.text}>start value:</span>
                <input
                    value={props.startValue}
                    type="number"
                    className={props.error ? styles.inputError : styles.input}
                    onChange={onChangeStartValueInputHandler}
                />
            </div>
        </div>
    );
};

export default SettingsDisplay;