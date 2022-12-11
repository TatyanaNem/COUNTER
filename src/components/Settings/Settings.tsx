import React from 'react';
import styles from './Settings.module.css';
import Button from '../Button/Button';
import SettingsDisplay from './SettingsDisplay';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setCurrentValue: (curValue: number | null) => void
    error: string
    setError: (errorMessage: string) => void
}

const Settings = (props: SettingsPropsType) => {

    const onButtonSetClickHandler = (curValue: number | null) => {
        props.setCurrentValue(curValue)
    }

    return (
        <div className={styles.settings}>
            <div className={styles.settingsContainer}>
                <SettingsDisplay
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setStartValue={props.setStartValue}
                    setMaxValue={props.setMaxValue}
                    setCurrentValue={props.setCurrentValue}
                    error={props.error}
                    setError={props.setError}
                />
                <div className={styles.buttonsBlock}>
                    <Button buttonTitle={'set'} disabled={props.error !== ''} callback={() => onButtonSetClickHandler(props.startValue)} />
                </div>
            </div>
        </div>
    );
};

export default Settings;