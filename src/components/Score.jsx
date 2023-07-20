import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Score = ( {student} ) => {
  return (
    <div className='scoreContainer'>
      <div className='left'>
        <h3>DATE</h3>
        {student.scores.map((score) => {
            return <p>{score.date}</p>
        })}
      </div>
      <div className='right'>
        <h3>SCORE</h3>
        {student.scores.map((score) => {
            return <p>{score.score}</p>
        })}
      </div>
    </div>
  )
}

export default Score
