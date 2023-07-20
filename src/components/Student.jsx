import React from 'react'
import Score from './Score'

const Student = ( {student} ) => {
  return (
    <div className='student'>
      <h1 className='name'>{student.name}</h1>
      <p className='bold'>Bio</p>
      <p className='bio'>{student.bio}</p>
{/* 
      {student.scores.map((score) => {
        return <Score score={score}/>
      })} */}

      <Score student={student}/>

    </div>
  )
}

export default Student
