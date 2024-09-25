
import { useState } from "react"
import styles from './ColorPickerApp.module.sass'

function ColorPicker(){

    const [color,setColor] = useState("#ffff");
    const handleColorStatement = function(event){
        setColor(event.target.value);
    }
    return(<>
    <h1 className={styles.header}>Pick a color</h1>
    <div className={styles.colorContainer} style = {{backgroundColor:color}}>
        <p>Color picked:{color}</p>
    </div>
    <p style={{textAlign:"center",
        fontSize:"20px"
    }}>Select a color:</p>
    <input className={styles.mainInput} type="color" onChange={handleColorStatement}/>
    </>)
}
export default ColorPicker