'use client'

import { FC } from 'react'
import styles from "./page.module.css";



const HomePage: FC = () => {
    return(
        
        <div className={styles.main}>
            
            <div className={styles.topicleft}>
                <h2 ><span className={styles.darkblue}>Traditional <br></br>
                Fundraising <br></br></span>
                <span className={styles.blue}>Doesn't Work</span> <br></br>
                <span className={styles.darkblue}> in DeFi </span></h2>
            </div>

            <div className={styles.topicright}>
                <div className={styles.box}>
                    <div className={styles.row}>
                        <p className={styles.headtext}>01</p>
                        <p className={styles.text}>
                            Without a big budget, it's hard to <br></br>approach venture investors
                        </p> 
                    </div>
                </div>
                <div className={styles.box}> 
                <div className={styles.row}>
                        <p className={styles.headtext}>02</p>
                        <p className={styles.text}>
                            VCs don't care about your DeFi idea <br></br>– only their gains
                        </p> 
                    </div>
                </div>
                <div className={styles.box}>
                <div className={styles.row}>
                        <p className={styles.headtext}>03</p>
                        <p className={styles.text}>
                            They force you into selling your  <br></br>tokens at a huge discount…
                        </p> 
                    </div>
                </div>
                <div className={styles.box}>
                <div className={styles.row}>
                        <p className={styles.headtext}>04</p>
                        <p className={styles.text}>
                            ...Then dump them at the first  <br></br>opportunity
                        </p> 
                    </div>
                </div>
                <div className={styles.box}>
                <div className={styles.row}>
                        <p className={styles.headtext}>05</p>
                        <p className={styles.text}>
                            Result: your token collapses.  <br></br>Everyone goes home.
                        </p> 
                    </div>
                </div>
            </div>
            
        </div>
        
        
    )
}

export default HomePage