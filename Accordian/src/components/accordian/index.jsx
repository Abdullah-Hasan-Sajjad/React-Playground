//single selection 
// multiple selection 

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian(){

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleID, setMultipleID] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null: getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let copyMultipleState = [...multipleID];
        // find the index no of the clicked portion
        const findIndexOfCurrentID = copyMultipleState.indexOf(getCurrentId);

        //console.log(selected, multipleID);
        // if index value -1 that means not it the list so push to the list ELSE remove from the list 
        if(findIndexOfCurrentID === -1) copyMultipleState.push(getCurrentId);
        else copyMultipleState.splice(findIndexOfCurrentID, 1); // (index if the id, remove 1 item)

        setMultipleID(copyMultipleState);
    }

    console.log(selected);

    return <div className="wrapper">

        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable multiple selection</button>

        <div className="accordian">
            {
               data && data.length > 0 ?

               data.map(dataItem =>

               <div className="item">
                    <div onClick=
                    {
                        enableMultiSelection
                        ? ()=>handleMultiSelection(dataItem.id)
                        : ()=>handleSingleSelection(dataItem.id)
                    } className="title">
                        <h4>{dataItem.question}</h4>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ?
                        multipleID.indexOf(dataItem.id) !== -1 &&
                        (<div className="content">{dataItem.answer}</div>) 
                        : selected === dataItem.id && 
                        (<div className="content">{dataItem.answer}</div>)}
                    
               </div>)
               : (<div>No data found !</div>)
            }
        </div>
    </div>;
}