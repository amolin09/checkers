import { useState, useEffect } from 'react';
import "./CheckerBoard.css"
import RedSpace from "./Spaces/RedSpace.jsx"
import BlackSpace from "./Spaces/BlackSpace.jsx"

export default function CheckerBoard(){
    const [currentPlayer, setCurrentPlayer] = useState("Black");
    const [selectedPiece, setSelectedPiece] = useState({});
    const [message, setMessage] = useState();
    // const [targetCoord, setTargetCoord] = useState();

    
    
    const [boardL, setBoardL] = useState(
        [
            [0,2,0,2,0,2,0,2], //0 means empty red space
            [2,0,2,0,2,0,2,0], //1 means empty black space
            [0,2,0,2,0,2,0,2], //2 means black space with red piece 
            [1,0,1,0,1,0,1,0], //3 means black space with black piece
            [0,1,0,1,0,1,0,1], //4 means black space with red king piece
            [3,0,3,0,3,0,3,0], //5 means black space with black king piece
            [0,3,0,3,0,3,0,3],
            [3,0,3,0,3,0,3,0]
        ]
    )

    const handleMove = (x, y) =>{
        
        let validSelection1;
        let validSelection2;

        let xCoord = x;
        let yCoord = y;

        if(currentPlayer === "Black"){
            validSelection1 = 3;
            validSelection2 = 5;
        }
        else{
            validSelection1 = 2;
            validSelection2 = 4;
        }
        
        handleSelection(xCoord, yCoord, validSelection1, validSelection2)
    }

    const handleSelection = (xCoord, yCoord, validSelection1, validSelection2) =>{

        if(boardL[xCoord][yCoord] == validSelection1 || boardL[xCoord][yCoord] == validSelection2){
            console.log(boardL[xCoord][yCoord])
            console.log(validSelection1)
            setSelectedPiece({x: xCoord, y: yCoord, status: boardL[xCoord][yCoord]})
            setMessage("")
           
        }
        else{
            setMessage("That is not a valid piece")
        }
    }

    const [board, setBoard] = useState([
        [<RedSpace/>, <BlackSpace status={boardL[0][1]} handleSelection={() => handleMove(0,1)}/>, <RedSpace/>, <BlackSpace status={boardL[0][3]} handleSelection={() => handleMove(0,3)}/>, <RedSpace/>, <BlackSpace status={boardL[0][5]} handleSelection={() => handleMove(0,5)}/>, <RedSpace/>, <BlackSpace status={boardL[0][7]} handleSelection={() => handleMove(0,7)}/>],
        [<BlackSpace status={boardL[1][0]} handleSelection={() => handleMove(1,0)}/>, <RedSpace/>, <BlackSpace status={boardL[1][2]} handleSelection={() => handleMove(1,2)}/>, <RedSpace/>, <BlackSpace status={boardL[1][4]} handleSelection={() => handleMove(1,4)}/>, <RedSpace/>, <BlackSpace status={boardL[1][6]} handleSelection={() => handleMove(1,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[2][1]} handleSelection={() => handleMove(2,1)}/>, <RedSpace/>, <BlackSpace status={boardL[2][3]} handleSelection={() => handleMove(2,3)}/>, <RedSpace/>, <BlackSpace status={boardL[2][5]} handleSelection={() => handleMove(2,5)}/>, <RedSpace/>, <BlackSpace status={boardL[2][7]} handleSelection={() => handleMove(2,7)}/>],
        [<BlackSpace status={boardL[3][0]} handleSelection={() => handleMove(3,0)}/>, <RedSpace/>, <BlackSpace status={boardL[3][2]} handleSelection={() => handleMove(3,2)}/>, <RedSpace/>, <BlackSpace status={boardL[3][4]} handleSelection={() => handleMove(3,4)}/>, <RedSpace/>, <BlackSpace status={boardL[3][6]} handleSelection={() => handleMove(3,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[4][1]} handleSelection={() => handleMove(4,1)}/>, <RedSpace/>, <BlackSpace status={boardL[4][3]} handleSelection={() => handleMove(4,3)}/>, <RedSpace/>, <BlackSpace status={boardL[4][5]} handleSelection={() => handleMove(4,5)}/>, <RedSpace/>, <BlackSpace status={boardL[4][7]} handleSelection={() => handleMove(4,7)}/>],
        [<BlackSpace status={boardL[5][0]} handleSelection={() => handleMove(5,0)}/>, <RedSpace/>, <BlackSpace status={boardL[5][2]} handleSelection={() => handleMove(5,2)}/>, <RedSpace/>, <BlackSpace status={boardL[5][4]} handleSelection={() => handleMove(5,4)}/>, <RedSpace/>, <BlackSpace status={boardL[5][6]} handleSelection={() => handleMove(5,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[6][1]} handleSelection={() => handleMove(6,1)}/>, <RedSpace/>, <BlackSpace status={boardL[6][3]} handleSelection={() => handleMove(6,3)}/>, <RedSpace/>, <BlackSpace status={boardL[6][5]} handleSelection={() => handleMove(6,5)}/>, <RedSpace/>, <BlackSpace status={boardL[6][7]} handleSelection={() => handleMove(6,7)}/>],
        [<BlackSpace status={boardL[7][0]} handleSelection={() => handleMove(7,0)}/>, <RedSpace/>, <BlackSpace status={boardL[7][2]} handleSelection={() => handleMove(7,2)}/>, <RedSpace/>, <BlackSpace status={boardL[7][4]} handleSelection={() => handleMove(7,4)}/>, <RedSpace/>, <BlackSpace status={boardL[7][6]} handleSelection={() => handleMove(7,6)}/>, <RedSpace/>]
        ])


    

    const nextTurn = () => {
        if(currentPlayer === "Black"){
            setCurrentPlayer("Red")
        }
        else(
            setCurrentPlayer("Black")
        )
    }
   
    
   

    return(
        <div className='body'>
            <div className='black-side'>
                Black
            </div>
             
            <div className="board">
                {board}
            </div>
            { message && <div style={{backgroundColor: "blue"}}>{message}</div> }

            <div className='red-side'>
                Red
            </div>
        </div>
    )

}