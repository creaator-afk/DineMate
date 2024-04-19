import React,{useContext, useState} from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './Header.css'
import { RecommendContext } from '../../Context/RecommendContext'



const Header = () => {

    const {recommend_list,fetchRecommendation} = useContext(RecommendContext)

    const [formData,setFormData] = useState({
        dis_rec : ''
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
    }

    const onRecommend = async () => {
        
    }

    const onChange = (e) =>
        setFormData({...formData, [e.target.name] : e.target.value});
    

    const {dis_rec} = formData

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Savor the Flavor</h2>
                <h4 className='sub-content'>Your Personal Guide to Culinary Delight!</h4>
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

                        <datalist className='datalist' id="food_list">
                            
                            <option value="Paneer butter masala"></option>

                            {recommend_list.map((item,index) => {
                                return(
                                    <option key = {index} value={item}></option>
                                )
                            } )}


                        </datalist>
                            <img onClick = {() => fetchRecommendation(dis_rec)} src={assets.search_icon} alt="" />
                    
                </div>
                    
            </div>
        </div>
    )
}

export default Header
