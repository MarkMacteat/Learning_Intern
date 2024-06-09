'use client'

import Widget from '@/component/item_widget';
import { FC } from 'react';
import { useState } from 'react';
import  stockItems  from '@/data/item.json';
import styles from "./page.module.css";
import { ShoppingCartProvider } from '@/context/ShoppingCartContext';


const total = 0;


const HomePage: FC = () =>{
    
    const [item_list, setItem_list] = useState([{item_name: ''}])
    const item_listAdd = () => {
        setItem_list([...item_list, {item_name: ''}])
    }

    
    return (
        <ShoppingCartProvider>
            
            <div className={styles.topNav}>
                <a className={styles.a}>menu</a>
                <button className="cart"> cart</button>
            </div>
             
            
            <div className={styles.container}>
                <div className={styles.productContainer}>{stockItems.map(item => (
                    <div key={item.id}>
                        <Widget {...item}>
                        </Widget>
                    </div>
                    ))}
                </div>
            </div>
        </ShoppingCartProvider>

        // <body>
        //     <>
        //     <h1>vending machine</h1>
        //     <div className={styles.cart}>
        //         <div><button className={styles.cartbutton} >cart</button>  total {total} Baht</div>
        //     </div>

        //     {/* <div className={styles.body1}>
                
                    
        //                 <h1 className={styles.widget}>product</h1>
        //                 <h1 className={styles.widget}>product</h1>
        //                 <h1 className={styles.widget}>product</h1>
        //                 <h1 className={styles.widget}>product</h1>
        //                 <h1 className={styles.widget}>product</h1>
                

                

        //     </div> */}
        //     {/* <Row md={2} xs={1} lg={3}>
        //     <div className={styles.body1}>{stockItems.map(item => (

        //             <Col key={item.id}>
        //                 <Widget {...item} >
        //             </Widget></Col>

        //     ))}</div></Row> */}
            
            // <div className={styles.body1}>{stockItems.map(item => (

            //         <div key={item.id}>
            //             <Widget {...item} >
            //         </Widget></div>

            // ))}</div>
            
        //     </>
            

            
            

            
            
                
        //     {/* <h1> Store test </h1>
            
        //         <h2>{stockItems.map(item => (
        //             <div>{JSON.stringify(item)}</div>
        //         ))}</h2> */}
        
        // </body>
        
       
    )
}

export default HomePage
 
