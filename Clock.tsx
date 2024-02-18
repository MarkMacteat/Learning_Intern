import { FC } from 'react'
import { Fragment } from 'react'

const Clock: FC = ({Days,Hours,Minutes,Seconds}) => {
    return (
            <div className='clock'>
            <section>
                <p>{Days}</p>
                <small>Days</small>
            </section>
            <section>
                <p>{Hours}</p>
                <small>Hours</small>
            </section>
            <section>
                <p>{Minutes}</p>
                <small>Minutes</small>
            </section>
            <section>
                <p>{Seconds}</p>
                <small>Seconds</small>
            </section>
        </div>
                
    )
}

Clock.defaultProps={
    Days:10,
    Hours:10,
    Minutes:10,
    Seconds:10
}

export default Clock