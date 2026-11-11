import { useState } from "react";
import Card from "./components/Card";
import PlayerCard from "./components/Player";
import './App.css'

//unix adminstrator class work 

export default function App(){
  const [value, setValues] = useState(Array(9).fill(null))

  const [player, setPlayer] = useState('X')

  const  winner = (value) => {
    const winner_arr = [[0, 1, 2] ,[3, 4, 5], [6, 7, 8],
                        [0, 3, 6] ,[1, 4, 7], [2, 5, 8], 
                        [0, 4, 8], [2, 4, 6]]

    for (let win of winner_arr){
        if (value[win[0]]===value[win[1]] && value[win[1]]===value[win[2]] && value[win[1]] !== null){
          return value[win[0]]
      }
    }
    return null 

  }


  const handleClick = (index) => {
    const updated = [...value]
    if (updated[index] === null && !winner(value) ){
      updated [index] = player
      setValues(updated)

      if(winner(updated) === null){

      if (player === 'X'){
        setPlayer("O")}
      else{
        setPlayer("X")}
      }
    }
    
  }

return (
  <main className="game">
    <h1>Tic-Tac-Toe</h1>

    <div className="game-status">
      {winner(value) !== null ? (
        <PlayerCard player={`Winner ${winner(value)}`} />
      ) : (value.every((square) => square !== null)? 
      <PlayerCard player={`Draw`} />
      : <PlayerCard player={`Player ${player}'s turn`} />
        
      )}

    </div>

    <div className="board">
      {value.map((value, index) => (
        <Card
          key={index}
          name={value}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  </main>
)
}