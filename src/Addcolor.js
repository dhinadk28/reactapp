import { useState } from "react";
import Colorbox from "./Colorbox";
import Button from '@mui/material/Button';



export function Addcolor() {
    // const color = "skyblue";
    const [color, setColor] = useState("orange");

    //Array of string
    //  const colorList = ["orange", "crimson", "red","purple"];
    const [colorList, setColorList] = useState(["pink", "crimson", "red", "purple"]);

    const styles = {
        fontSize: "25px",
        backgroundColor: color,
    };
    return ( 
        <div>
        <div className = "add-color">
        <input onChange = {
            (e) => setColor(e.target.value) }
        style = { styles }
        type = "text"
        // placeholder="Enter Color"
        value = { color }/> {
            /* <button
                      //cope the colorList and add newColor to it
                      onClick={() => setColorList([...colorList, color])}
                    >Add Color</button> */
        }

        
         <Button onClick = {
            () => setColorList([...colorList, color]) } variant="contained"> Add Color</Button>


        </div>

        {
            colorList.map((clr) => ( <
                Colorbox color = { clr }/>
            ))
        } { /* <ColorBox color= {colorList[0]} /> */ }


        </div>
    );
}