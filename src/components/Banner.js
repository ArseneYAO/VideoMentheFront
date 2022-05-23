import logo from '../assets/logo.png'
import '../styles/Banner.css'
import {useEffect, useState} from 'react';


function Banner() {
    const title = 'Eole-Project Platforme'
    const [initialState, setInitialState] = useState([])

    useEffect(()=>{
        fetch('/api/').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    },[])

    console.log(initialState)

    
    const [msg,setMsg] = useState('')
    const handleClick = async () => {
        const data = await fetch('/api/videos')
        const json = await data.json()
        const msg = json.msg

        setMsg(msg)
    }    
    
    return (
        <div className='ep-banner'>
            <img src={logo} alt='Eole-Project' className='ep-logo' />
            <h1 className='ep-title'>{title}</h1>
            <button onClick={handleClick}>Charger vos vidéos</button>
            <p>{msg}</p>
        </div>
    )
}

export default Banner