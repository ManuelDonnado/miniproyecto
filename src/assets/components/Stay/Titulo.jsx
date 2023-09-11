import React from 'react'

function Titulo({estancia}) {
  console.log(estancia);
  return (
    <> 

      <div className='head-stay'>
        <div>
            <h2 className='head-top'>Stays in Finlad</h2>
        </div>

        <div>
            <h2 className='top-stay'> {estancia} stays</h2>
        </div>
      </div>  
    </>
  )
}

export default Titulo