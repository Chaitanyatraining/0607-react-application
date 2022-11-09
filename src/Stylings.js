import React from "react";
import './Stylings.css'
import styles from './Styling.module.css'

function Stylings(){
       const internalstyle = {
            color:"green",
            backgroundColor:"orange"
        }
        console.log(internalstyle)
    return(
        <div>
            {/* inline stylings */}
            <h2 style={{color:"red", backgroundColor:"blue" }}>Stylings in React</h2>

            {/* Internal Stylings */}

            <h2 style={internalstyle}>This is Internal Stylings</h2>

            {/* external stylings */}
            <p className="primary">This is External Css</p>

            {/* module css */}
            <h3 className={styles.primary}>This is module css</h3>
        </div>
    )
}

export default Stylings