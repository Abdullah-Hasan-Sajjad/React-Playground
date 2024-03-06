import { useState } from "react"

export default function RandomColor(){
    
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState("#000000");

    function randomGenerate(length){
        return Math.floor(Math.random()*length)
    }

    function hexColorGenerator(){
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",];
        let hexColor = "#";

        for(let i=0; i<6; i++){
            hexColor += hex[randomGenerate(hex.length)]
        }

        setColor(hexColor);
        //console.log(color);
    }

    function rgbColorGenerator(){
        const r = randomGenerate(256);
        const g = randomGenerate(256);
        const b = randomGenerate(256);

        setColor(`rgb(${r}, ${g}, ${b})`)
        //console.log(color);
    }

    return(
        <div 
        style = {
            {
            width: "100vw",
            height: "100vh",
            background: color,
            }
        } className="container">

            <button onClick={()=>setColorType('hex')}>Generate Hex Color</button>
            <button onClick={()=>setColorType('rgb')}>Generate RGB Color</button>
            <button onClick={colorType === 'hex'? hexColorGenerator : rgbColorGenerator}>Generate Color</button>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection  :'column',
                gap :'20px'
            }}>
                <h3>{color}</h3>
                <p>{colorType === 'hex' ? 'Hex Selected' : 'RGB selected'}</p>
            </div>

        </div>
    );
} 