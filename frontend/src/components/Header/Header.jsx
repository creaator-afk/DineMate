import React,{useState} from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './Header.css'



const Header = () => {



    const [formData,setFormData] = useState({
        dis_rec : ''
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
    }

    const onChange = (e) =>
        setFormData({...formData, [e.target.name] : e.target.value});
    

    const {dis_rec} = formData

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Savor the Flavor</h2>
                <h3>Your Personal Guide to Culinary Delight!</h3>
                <p>Discover a world of taste tailored just for you. Our platform uses your unique preferences to recommend meals that will tantalize your taste buds and satisfy your cravings. Say goodbye to the indecision of meal times and embrace a personalized culinary journey with us. Savor the flavor, one meal at a time!</p>

                <div className='search-box'>
                    
                        <input 
                        type="text" 
                        placeholder='What do you want to eat ....'
                        name = "dis_rec" 
                        value={dis_rec}
                        onChange={(e) => onChange(e)}    
                        list='food_list'
                        /> 

                        <datalist id="food_list">
                            <option value="Paneer butter masala"></option>
                        </datalist>
                        <Link to = 'http://localhost:8501'>
                            <img onClick src={assets.search_icon} alt="" />
                        </Link>
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Header
