'use client'


import {FC, useState, useEffect} from 'react'
import Clock from '@/component/Clock'
import styles from "./page.module.css";


const HomePage: FC = () => {

    const [Days, setDays] = useState(0)
    const [Hours, setHours] = useState(0)
    const [Minutes, setMinutes] = useState(0)
    const [Seconds, setSeconds] = useState(0)

    const endTime = "August 26, 2013 18:00:00 PDT"

    const getTime =()=>{
        const time = Date.parse(endTime) - Date.now()

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((time / 1000 / 60) % 60))
        setSeconds(Math.floor((time / 1000) % 60))
    } 
    
    useEffect(() => {
        const interval = setInterval(() =>{
            getTime(endTime), 1000
    })
        return () => clearInterval(interval)
    } ,[]); 

    return(
        <body className={styles.body}>
            <div className={styles.div}> 
                <Clock 
                Days={Days} 
                Hours={Hours}
                Minutes={Minutes}
                Seconds={Seconds}/>
            </div>
        </body>
    )
}

export default HomePage