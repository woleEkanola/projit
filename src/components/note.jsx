import React from 'react';


import Card from './card'


export default class Note extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {}
  }



  cards (){

    var cards = this.props.note.cards.map(card => {
      return <Card key={card.id} card={card} onClick={(e)=>this.props.setActiveCard(card)} />
    })

    return cards
  }

  render() {
    return (
      <div className='note'>
      <div className="noteHeader">
        <p>{this.props.note.title}</p>

        <div>
          <p onClick={(e)=>this.props.newCard(this.props.note.id)} >New Card +</p>
        </div>
        </div>
        <div className='cardContainer' >
          {this.cards()}
        </div>
    
      </div>);
  }
}
