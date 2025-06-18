import {useState} from 'react'
import './App.scss'
import { Button } from "antd";

function App() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }


    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-1.5">
            <h1 className="text-6xl">
                Pretty Pet Works
            </h1>
            <p>
                count: {count}
            </p>
            <Button type="primary" onClick={increment}>increment</Button>

        </div>
    )
}

export default App
