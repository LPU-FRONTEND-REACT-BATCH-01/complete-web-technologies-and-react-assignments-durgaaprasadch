import React from 'react' 
import nenu from '../../assets/nenu.jpg'

const Card = () => {
  return (
    <div className='card'>
        <img className='card-img' src={nenu} alt="Pic" />
        <h2 className='card-title'>Durga</h2>
        <p className='card-text'>Hey I am a Student</p>

    </div>
  )
}

export default Card
