import { useState, useEffect } from 'react';
import "./CheckerBoard.css"
import RedSpace from "./Spaces/RedSpace.jsx"
import BlackSpace from "./Spaces/BlackSpace.jsx"

export default function CheckerBoard(){
    const [currentPlayer, setCurrentPlayer] = useState("Black");
    const [selectedPiece, setSelectedPiece] = useState({});
    const [message, setMessage] = useState();
    const [blackPiecesLeft,setBlackPiecesLeft] = useState(12);
    const [redPiecesLeft, setRedPiecesLeft] = useState(12);
    let placeholderSelection = {
        x: 0,
        y: 0,
        status: 0
    }

    let targetCoord = {
        x: 0,
        y: 0,
        status: 0
    }

   
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

    const handlePlaceholderSelection = (x, y) => {
        placeholderSelection.x = x;
        placeholderSelection.y = y;
        placeholderSelection.status = boardL[x][y];
        console.log(placeholderSelection)
    }

    const [board, setBoard] = useState([
        [<RedSpace/>, <BlackSpace status={boardL[0][1]} handlePlaceholderSelection={() => handlePlaceholderSelection(0,1)}/>, <RedSpace/>, <BlackSpace status={boardL[0][3]} handlePlaceholderSelection={() => handlePlaceholderSelection(0,3)}/>, <RedSpace/>, <BlackSpace status={boardL[0][5]} handlePlaceholderSelection={() => handlePlaceholderSelection(0,5)}/>, <RedSpace/>, <BlackSpace status={boardL[0][7]} handlePlaceholderSelection={() => handlePlaceholderSelection(0,7)}/>],
        [<BlackSpace status={boardL[1][0]} handlePlaceholderSelection={() => handlePlaceholderSelection(1,0)}/>, <RedSpace/>, <BlackSpace status={boardL[1][2]} handlePlaceholderSelection={() => handlePlaceholderSelection(1,2)}/>, <RedSpace/>, <BlackSpace status={boardL[1][4]} handlePlaceholderSelection={() => handlePlaceholderSelection(1,4)}/>, <RedSpace/>, <BlackSpace status={boardL[1][6]} handlePlaceholderSelection={() => handlePlaceholderSelection(1,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[2][1]} handlePlaceholderSelection={() => handlePlaceholderSelection(2,1)}/>, <RedSpace/>, <BlackSpace status={boardL[2][3]} handlePlaceholderSelection={() => handlePlaceholderSelection(2,3)}/>, <RedSpace/>, <BlackSpace status={boardL[2][5]} handlePlaceholderSelection={() => handlePlaceholderSelection(2,5)}/>, <RedSpace/>, <BlackSpace status={boardL[2][7]} handlePlaceholderSelection={() => handlePlaceholderSelection(2,7)}/>],
        [<BlackSpace status={boardL[3][0]} handlePlaceholderSelection={() => handlePlaceholderSelection(3,0)}/>, <RedSpace/>, <BlackSpace status={boardL[3][2]} handlePlaceholderSelection={() => handlePlaceholderSelection(3,2)}/>, <RedSpace/>, <BlackSpace status={boardL[3][4]} handlePlaceholderSelection={() => handlePlaceholderSelection(3,4)}/>, <RedSpace/>, <BlackSpace status={boardL[3][6]} handlePlaceholderSelection={() => handlePlaceholderSelection(3,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[4][1]} handlePlaceholderSelection={() => handlePlaceholderSelection(4,1)}/>, <RedSpace/>, <BlackSpace status={boardL[4][3]} handlePlaceholderSelection={() => handlePlaceholderSelection(4,3)}/>, <RedSpace/>, <BlackSpace status={boardL[4][5]} handlePlaceholderSelection={() => handlePlaceholderSelection(4,5)}/>, <RedSpace/>, <BlackSpace status={boardL[4][7]} handlePlaceholderSelection={() => handlePlaceholderSelection(4,7)}/>],
        [<BlackSpace status={boardL[5][0]} handlePlaceholderSelection={() => handlePlaceholderSelection(5,0)}/>, <RedSpace/>, <BlackSpace status={boardL[5][2]} handlePlaceholderSelection={() => handlePlaceholderSelection(5,2)}/>, <RedSpace/>, <BlackSpace status={boardL[5][4]} handlePlaceholderSelection={() => handlePlaceholderSelection(5,4)}/>, <RedSpace/>, <BlackSpace status={boardL[5][6]} handlePlaceholderSelection={() => handlePlaceholderSelection(5,6)}/>, <RedSpace/>],
        [<RedSpace/>, <BlackSpace status={boardL[6][1]} handlePlaceholderSelection={() => handlePlaceholderSelection(6,1)}/>, <RedSpace/>, <BlackSpace status={boardL[6][3]} handlePlaceholderSelection={() => handlePlaceholderSelection(6,3)}/>, <RedSpace/>, <BlackSpace status={boardL[6][5]} handlePlaceholderSelection={() => handlePlaceholderSelection(6,5)}/>, <RedSpace/>, <BlackSpace status={boardL[6][7]} handlePlaceholderSelection={() => handlePlaceholderSelection(6,7)}/>],
        [<BlackSpace status={boardL[7][0]} handlePlaceholderSelection={() => handlePlaceholderSelection(7,0)}/>, <RedSpace/>, <BlackSpace status={boardL[7][2]} handlePlaceholderSelection={() => handlePlaceholderSelection(7,2)}/>, <RedSpace/>, <BlackSpace status={boardL[7][4]} handlePlaceholderSelection={() => handlePlaceholderSelection(7,4)}/>, <RedSpace/>, <BlackSpace status={boardL[7][6]} handlePlaceholderSelection={() => handlePlaceholderSelection(7,6)}/>, <RedSpace/>]
        ])

    const nextTurn = () => {
        if(currentPlayer === "Black"){
            setCurrentPlayer("Red")
        }
        else(
            setCurrentPlayer("Black")
        )
    }

    const handleMove = (x, y) =>{
        
        let validSelection1;
        let validSelection2;

        let xCoord = placeholderSelection.x;
        let yCoord = placeholderSelection.y;

        if(currentPlayer === "Black"){
            validSelection1 = 3;
            validSelection2 = 5;
        }
        else{
            validSelection1 = 2;
            validSelection2 = 4;
        }
        
        handleSelection(xCoord, yCoord, validSelection1, validSelection2)
        handleTargetSelection(xCoord, yCoord)
        handleMoveCalculation(selectedPiece, targetCoord)
    }

    const handleSelection = (xCoord, yCoord, validSelection1, validSelection2) =>{

        if(boardL[xCoord][yCoord] === validSelection1 || boardL[xCoord][yCoord] === validSelection2){
          
            setSelectedPiece({x: xCoord, y: yCoord, status: boardL[xCoord][yCoord]})
            setMessage("")
           
        }
        else{
            setMessage("That is not a valid piece")
        }
    }

    const handleTargetSelection = (xCoord, yCoord) => {
        let x = xCoord;
        let y = yCoord;

        targetCoord.x = x;
        targetCoord.y = y;
        targetCoord.status = boardL[x][y]
    }

    const handleMoveCalculation = (selectedPiece,targetCoord) =>{
        if(currentPlayer === "Black"){
            if(selectedPiece.status === 3){
                handleBlackPieceMove(selectedPiece, targetCoord)
            }
            else if(selectedPiece.status === 5){
                handleBlackKingPieceMove(selectedPiece, targetCoord)
            }
        }
        else{
            if(selectedPiece.status === 2){
                handleRedPieceMove(selectedPiece, targetCoord)
            }
            else if(selectedPiece.status === 4){
                handleRedKingPieceMove(selectedPiece, targetCoord)
            }
        }
    }

    const handleBlackPieceMove = (selectedPiece, targetCoord) =>{
        if((selectedPiece.x - 1 === targetCoord.x)&&((selectedPiece.y - 1 === targetCoord.y)||(selectedPiece.y + 1 === targetCoord.y))&&(targetCoord.status === 1)){ //checking if the piece can move to an empty space
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            setBoardL(updatedArray)
            nextTurn()
        }
        else if((selectedPiece.x-2 === targetCoord.x)&&(targetCoord.status === 1)&&(((selectedPiece.y - 2 === targetCoord.y)&&((boardL[selectedPiece.x-1][selectedPiece.y-1] === 2)||(boardL[selectedPiece.x-1][selectedPiece.y-1] === 4))))){ //checking if black piece can capture left side
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            updatedArray[selectedPiece.x-1][selectedPiece.y-1] = 1;
            setRedPiecesLeft(redPiecesLeft-1)
            setBoardL(updatedArray)
            nextTurn()
        }
        else if((selectedPiece.x-2 === targetCoord.x)&&(targetCoord.status === 1)&&(((selectedPiece.y + 2 === targetCoord.y)&&((boardL[selectedPiece.x-1][selectedPiece.y+1] === 2)||(boardL[selectedPiece.x-1][selectedPiece.y+1] === 4))))){ //checking if black piece can capture right side
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            updatedArray[selectedPiece.x-1][selectedPiece.y+1] = 1;
            setRedPiecesLeft(redPiecesLeft-1)
            setBoardL(updatedArray)
            nextTurn()
        }
        else{
            setMessage("That is an invalid move!")
        }
    }

    const handleBlackKingPieceMove = (selectedPiece, targetCoord) =>{
        
    }

    const handleRedPieceMove = (selectedPiece, targetCoord) =>{
        if((selectedPiece.x + 1 === targetCoord.x)&&((selectedPiece.y - 1 === targetCoord.y)||(selectedPiece.y + 1 === targetCoord.y))&&(targetCoord.status === 1)){ //checking if the red piece can move to an empty space, either left or right
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            setBoardL(updatedArray)
            nextTurn()
        }
        else if((selectedPiece.x+2 === targetCoord.x)&&(targetCoord.status === 1)&&(((selectedPiece.y - 2 === targetCoord.y)&&((boardL[selectedPiece.x+1][selectedPiece.y-1] === 2)||(boardL[selectedPiece.x+1][selectedPiece.y-1] === 4))))){ //checking if red piece can capture left side
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            updatedArray[selectedPiece.x+1][selectedPiece.y-1] = 1;
            setBlackPiecesLeft(blackPiecesLeft-1)
            setBoardL(updatedArray)
            nextTurn()
        }
        else if((selectedPiece.x+2 === targetCoord.x)&&(targetCoord.status === 1)&&(((selectedPiece.y + 2 === targetCoord.y)&&((boardL[selectedPiece.x+1][selectedPiece.y+1] === 2)||(boardL[selectedPiece.x+1][selectedPiece.y+1] === 4))))){ //checking if red piece can capture right side
            const updatedArray = [
                ...boardL[0],
                ...boardL[1],
                ...boardL[2],
                ...boardL[3],
                ...boardL[4],
                ...boardL[5],
                ...boardL[6],
                ...boardL[7]
            ]
        
            updatedArray[targetCoord.x][targetCoord.y] = selectedPiece.status;
            updatedArray[selectedPiece.x][selectedPiece.y] = 1;
            updatedArray[selectedPiece.x+1][selectedPiece.y+1] = 1;
            setBlackPiecesLeft(blackPiecesLeft-1)
            setBoardL(updatedArray)
            nextTurn()
        }
        else{
            setMessage("That is an invalid move!")
        }
    }

    const handleRedKingPieceMove = (selectedPiece, targetCoord) =>{
        
    }

   
    return(
        <div className='body'>
            <div className='black-side'>
                <span>Black</span>
            </div>
             
            <div className="board">
                {board}
            </div>
            { message && <div style={{backgroundColor: "blue"}}>{message}</div> }

            <div className='red-side'>
                <span>Red</span>
            </div>
        </div>
    )

}