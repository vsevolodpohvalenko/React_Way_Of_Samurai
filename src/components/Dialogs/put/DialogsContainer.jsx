import React, {Component } from 'react';
import { updateNewMessageTextCreator, AddTextCreator } from '../../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import Dialogs, { MessageForm } from '../Dialogs';
import { WithAuthRedirect } from '../../../HOC/WithAuthRedirect';
import { compose } from 'redux';
// const TextrContainer = (props) => {


//   return <StoreContext.Consumer>
//     { 
//     (store) => {
//       let state = store.getState()
//     let ChangeText =(NewMessage) =>{
 
//       store.dispatch(updateNewMessageTextCreator(NewMessage))
//     }
    
//     let addtext=( )=>{
//       store.dispatch(AddTextCreator())
//       store.dispatch(updateNewMessageTextCreator(' '))}

   
//    return  <Textr newMessageChange={state.dialogs.newMessageChange} updateNewMessage={ChangeText} AddTextCreator={addtext} />
//     }
//     }
//     </StoreContext.Consumer>

// }


let mapStateToProps= (state) => {
  return {
    messages: state.dialogs.messages,
    dialog: state.dialogs.dialog,
    newMessageChange: state.dialogs.newMessageChange, 
    isAuth: state.auth.isAuth
    
  }
}

let mapDispatchToProps= (dispatch) => {
  return{
  updateNewMessage: (NewMessage) => {
    dispatch(updateNewMessageTextCreator(NewMessage))
    },
    AddTextCreator: (NewMessageBody) => {
      dispatch(AddTextCreator(NewMessageBody))
      dispatch(updateNewMessageTextCreator(' '))
    }
  }
    }


export default compose(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect,)(Dialogs)