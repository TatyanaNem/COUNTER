import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [currentValue, setCurrentValue] = useState<number | null>(null)
    const [error, setError] = useState<string>('')


    return (
    <div className="App">
        <div className="appContainer">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setStartValue={setStartValue}
                setMaxValue={setMaxValue}
                setCurrentValue={setCurrentValue}
                error={error}
                setError={setError}
            />
            <Counter
                startValue={startValue}
                maxValue={maxValue}
                currentValue={currentValue}
                setCurrentValue={setCurrentValue}
                error={error}
            />
        </div>
    </div>
  );
}

export default App;
