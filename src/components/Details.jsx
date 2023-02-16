import React from 'react'

function Details({info}) {
  return (
    <ul className='details'>
{
    info.map(({name, value}) => {
        return <li className="details__field" key={value}>
            <h2 className="details__title">{name}</h2>
            <p className="details__info">{value}</p> 
        </li>
    })
}
    </ul>
  )
}

export default Details