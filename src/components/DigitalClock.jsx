import React, { useState, useEffect } from 'react'
import './digiclk.scss'

function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.title = time.toLocaleTimeString()
    }, [time])

    function formatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        hours = hours % 12 || 12

        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)}`
    }

    function padzero(num) {
        return (num < 10 ? '0' : '') + num
    }


    return (
        <div className='clock-container'>
            <div className='clock-glass'>
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    )
}

export default DigitalClock