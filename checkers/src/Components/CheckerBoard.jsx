import { useState, useEffect } from 'react';
import "./CheckerBoard.css"
import RedSpace from "./Spaces/RedSpace.jsx"
import BlackSpace from "./Spaces/BlackSpace.jsx"

export default function CheckerBoard(){
    const [currentPlayer, setCurrentPlayer] = useState("Black");
    const [selectedPiece, setSelectedPiece] = useState();
    const [targetCoord, setTargetCoord] = useState();

    let xCoord;
    let yCoord;
    
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

    const handleSelection = (e) =>{
        let selectedPieceStatus = e.target.status;
        let selectedPieceXCoord = e.currentTarget.xCoord;
        let selectedPieceYCoord = e.currentTarget.yCoord;
        setSelectedPiece(e.currentTarget)

        console.log(selectedPiece)
        console.log(selectedPieceStatus)
        console.log(selectedPieceXCoord)
        console.log(selectedPieceYCoord)
    }

    const [board, setBoard] = useState([
        [<RedSpace/>, <BlackSpace status={boardL[0][1]} xCoord={0} yCoord={1} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[0][3]} xCoord={0} yCoord={3} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[0][5]} xCoord={0} yCoord={5} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[0][7]} xCoord={0} yCoord={7} handleSelection={handleSelection}/>],
        [<BlackSpace status={boardL[1][0]} xCoord={1} yCoord={0} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[1][2]} xCoord={1} yCoord={2} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[1][4]} xCoord={1} yCoord={4} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[1][6]} xCoord={1} yCoord={6} handleSelection={handleSelection}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[2][1]} xCoord={2} yCoord={1} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[2][3]} xCoord={2} yCoord={3} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[2][5]} xCoord={2} yCoord={5} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[2][7]} xCoord={2} yCoord={7} handleSelection={handleSelection}/>],
        [<BlackSpace status={boardL[3][0]} xCoord={3} yCoord={0} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[3][2]} xCoord={3} yCoord={2} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[3][4]} xCoord={3} yCoord={4} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[3][6]} xCoord={3} yCoord={6} handleSelection={handleSelection}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[4][1]} xCoord={4} yCoord={1} handleSelection={handleSelection}/>, <RedSpace/>, <BlackSpace status={boardL[4][3]} xCoord={4} yCoord={3}/>, <RedSpace/>, <BlackSpace status={boardL[4][5]} xCoord={4} yCoord={5}/>, <RedSpace/>, <BlackSpace status={boardL[4][7]} xCoord={4} yCoord={7}/>],
        [<BlackSpace status={boardL[5][0]} xCoord={5} yCoord={0}/>, <RedSpace/>, <BlackSpace status={boardL[5][2]} xCoord={5} yCoord={2}/>, <RedSpace/>, <BlackSpace status={boardL[5][4]} xCoord={5} yCoord={4}/>, <RedSpace/>, <BlackSpace status={boardL[5][6]} xCoord={5} yCoord={6}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[6][1]} xCoord={6} yCoord={1}/>, <RedSpace/>, <BlackSpace status={boardL[6][3]} xCoord={6} yCoord={3}/>, <RedSpace/>, <BlackSpace status={boardL[6][5]} xCoord={6} yCoord={5}/>, <RedSpace/>, <BlackSpace status={boardL[6][7]} xCoord={0} yCoord={1}/>],
        [<BlackSpace status={boardL[7][0]} xCoord={7} yCoord={0}/>, <RedSpace/>, <BlackSpace status={boardL[7][2]} xCoord={7} yCoord={2}/>, <RedSpace/>, <BlackSpace status={boardL[7][4]} xCoord={7} yCoord={4}/>, <RedSpace/>, <BlackSpace status={boardL[7][6]} xCoord={7} yCoord={6}/>, <RedSpace/>]
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

            <div className='red-side'>
                Red
            </div>
        </div>
    )

}