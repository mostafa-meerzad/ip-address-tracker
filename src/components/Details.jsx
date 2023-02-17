import React from 'react'

function Details({info}) {

  console.log(info);
  return (
    // add a key prop to the details section in order to show new data every time
    // otherwise it breaks
    <ul className='details' key={info[0].value}>
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