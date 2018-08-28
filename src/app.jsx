import React from 'react';
import localforage from 'localforage'

import Note from './components/note'
import Modal from './components/modal'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.setActiveCard = this.setActiveCard.bind(this);
    this.newCard = this.newCard.bind(this);
    this.state = {
      notes: [
        {
          id: '09123',
          title: 'This is how a card Shows',
          cards: [
            {
              id: '09123_01234',
              title: 'My new Card',
              content: 'Lorem Ipsum Dolor set'
            },
            {
              id: '09123_01256',
              title: 'another Card',
              content: 'jdjdj idididi idjvjf or r  ufhfhf uehfhfi ifjfhf hhdhfhfi Lorem Ipsum Dolor set'
            },
          ]
        },
        {
          id: '3723',
          title: 'This is how a card Shows',
          cards: [
            {
              id: '3723_01234',
              title: 'My new Card',
              content: 'Lorem Ipsum Dolor set'
            },
            {
              id: '3723_01256',
              title: 'another Card',
              content: 'jdjdj idididi idjvjf or r  ufhfhf uehfhfi ifjfhf hhdhfhfi Lorem Ipsum Dolor set'
            },
          ]
        },
      ],
      modal: false,
      modalEdit: false,
      activeCard: {}
    }
  }

  setActiveCard(x) {

    // localStorage.setItem('ActiveCard', JSON.stringify(x))
    this.setState({
        modal: true,
        activeCard: x
    })
  }
  closeModal(){
    this.setState({
      modal: false,
      modalEdit: false,
      activeCard: {}
  })
  }
  newCard(x){
    console.log(x)
    //check for the note with id x
    let note = this.state.notes
    let targetNote = note.findIndex(noted=>{
      return noted.id == x
    })
      // add a new card for the note
    note[targetNote].cards.push({
      id:   x + '_' + Math.round(Math.random() * 899),
      content: 'Type your text here',
      title: 'Card Title'
    })
  
    this.setState({
      notes:note,
      modal: true,
      modalEdit: true
    
    })
  }
  componentDidMount(){
    console.log('localforage is: ', localforage)
  }
  
  render() { 
    const notes = this.state.notes.map(note=>{
      return <Note key= {note.id} 
      note= {note} 
      setActiveCard= {this.setActiveCard}
      newCard= {this.newCard}
       />
        })
    return (<div className= 'mainContainer'>
  {notes}

      {this.state.modal ? <Modal card= {this.state.activeCard} onClick={this.closeModal.bind(this)} modalEdit={this.state.modalEdit} /> : ''}
   </div>);
  }
}
