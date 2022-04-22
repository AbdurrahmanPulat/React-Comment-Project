import React from 'react'
import Comment from './Comment'
import { faker } from '@faker-js/faker'
import Card from './Card'

const App = () => {
  return (
    <div className="ui comments" style ={{
      paddingTop: "20px",
      paddingLeft: "20px"
    }}>
  
  <Card>
  <Comment names= " Abdurrahman Pülat" timeAgo="2" star ="5" avatar ={faker.image.avatar(faker)} comment="I'm Legendery"/></Card>
  <Card>
  <Comment names= "Mustafa  Avş" timeAgo="4" star ="3"avatar ={faker.image.avatar(faker)} comment="I'm Amazing "/>

  </Card>
</div>

  )
}

export default App;
  