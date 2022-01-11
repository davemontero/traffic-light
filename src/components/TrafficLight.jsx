import { useState } from 'react'
import '../styles/TrafficLight.css'

const TrafficLight = () => {
    const lights = {
        red: '',
        yellow: '',
        green: ''
    }

    const [light, setLight] = useState(lights)

    const switchLight = e => {
        for (const key in light) {
            if (key === e.target.classList[0]) {
                setLight(light => ({
                    ...light,
                    [key]: 'on'
                }))
            } else {
                setLight(light => ({
                    ...light,
                    [key]: ''
                }))
            }
        }
    }
    return (
    <>
        <div className="container">
            <div className={`red light ${light.red}`} onClick={switchLight}></div>
            <div className={`yellow light ${light.yellow}`} onClick={switchLight}></div>
            <div className={`green light ${light.green}`} onClick={switchLight}></div>
        </div>
    </>
    )
}

export default TrafficLight