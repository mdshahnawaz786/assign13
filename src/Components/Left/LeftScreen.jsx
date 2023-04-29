import React, { useEffect, useState } from 'react'

import './ls.css'


const LeftScreen = () => {

    const [state, setState] = useState([])


    useEffect(()=>{
        apicall()
    },[])

    async function apicall(){
        const api = await fetch("https://randomuser.me/api/?gender=all&results=50")
        const res = await api.text()
        const data = JSON.parse(res)
        // console.log(data.results);
        setState(data.results)
    }


  return (
    <div className='leftComp'>
    <h2>API DATA </h2>
    {state.length > 0 && <div className='innerContainer'>
            {state.map((ele) => {
                return (
                    <div className="dataContainer">
                        <img src={ele.picture.large} alt="" />
                        <p> {ele.name.first +" "+ ele.name.last}</p>
                        <p>{ele.email}</p>
                        <p>{ele.phone}</p>
                        <p>{ele.gender}</p>
                    </div>
                )
            })}
        </div>}
</div>
  )
}

export default LeftScreen