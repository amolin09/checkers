import { useState, useEffect } from 'react';
import "./CheckerBoard.css"
import RedSpace from "./Spaces/RedSpace.jsx"
import BlackSpace from "./Spaces/BlackSpace.jsx"

export default function CheckerBoard(){
    const [board, setBoard] = useState([[]])
   
    for(let i = 0; i < 8; i++){
        
        for(let j = 0; j < 8; j++){
           
           
            if(i%2===0){
               if(j%2===0){
                board.push(<RedSpace/>)
               }
               else{
                board.push(<BlackSpace/>)
               }
            }
            else{
                if(j%2===0){
                    board.push(<BlackSpace/>)
                   }
                   else{
                    board.push(<RedSpace/>)
                }
            }
        
        }  
    }
    return(
        <div className="board">
            {board}
        </div>
    )

}