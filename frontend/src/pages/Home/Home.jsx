import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All")
  const [recommnedation_list_,setRecommendendationList] = useState("All")


  return (
    <>
      <Header setRecommendendationList = {setRecommendendationList} />
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category} recommnedation_list_={recommnedation_list_}/>
      <AppDownload/>
    </>
  )
}

export default Home
