import React, { useState } from 'react'
import Birthday from './Birthday';
import Data from './Data';

function ShowBirthday() {

  const [persons , setpersons] = useState(Data)

  const deleteAll = ()=>{
    setpersons([])
    console.log(persons);
  }

const value = persons.length > 0 ? "Clear All" : 
'Cleared'

  return (
    <div className='container m-4'>

        {persons.map(p => <Birthday person= {p} key={p.id}/>)}

        <button className={persons.length > 0 ? 'btn btn-primary btn-danger m-5' : 
        'btn btn-primary btn-success m-5'} onClick={deleteAll}>{value}</button>
    </div>
  )
}

export default ShowBirthday