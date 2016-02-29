 
var gameBoard=function(){    
    
    
} 
                   
var score = function(board, player){
    
    if (isWin(board, player)){
        if (player==="X"){
            return 10;
        } else {
            return -10;
        }
    } else if (boardFull(board)) {
        return 0;
    } else {
        return null;
    }
}

var isWin= function(board, player){
    if ((board[0] === player && board[1] === player && board[2] === player) || 
    (board[3] === player && board[4] === player && board[5] === player) || 
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) || 
    (board[1] === player && board[4] === player && board[7] === player) || 
    (board[2] === player && board[5] === player && board[8] === player) || 
    (board[0] === player && board[4] === player && board[8] === player) || 
    (board[2] === player && board[4] === player && board[6] === player)){
        return true;
    } else {
        return false;
    }
}

var boardFull=function(board){
    if (board.indexOf("E") === -1){
        return true;
    } else {
        return false;
    }
}