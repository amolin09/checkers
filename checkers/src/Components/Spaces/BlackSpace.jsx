import "./BlackSpace.css"
import CircleIcon from "@mui/icons-material/Circle"

export default function BlackSpace({status, handlePlaceholderSelection}){


    let pieceColor = "";
    if(status === 2 || status === 4){
        pieceColor = "red";
    }
    else if(status === 3 || status === 5){
        pieceColor = "gray";
    }
    else{
        pieceColor = "blue";
    }


    return(
        <div className="black-space" onClick={handlePlaceholderSelection}>
            <div className="piece-container">
                {status > 1? <CircleIcon
                sx={{color: pieceColor, 
                    width: 80, 
                    height: 80}}/> 
                : <></>}
            </div>
        </div>
    )
}