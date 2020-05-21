
const UPDATE_NEW_TEXT_BODY = 'UPDATE-NEW-TEXT-BODY'
const ADD_TEXT  = 'ADD-TEXT'
let initialState ={
dialog : [
  {id: 1, name: 'Dimych',Ava:"https://imgur.com/I80W1Q0.png"},
  {id: 2, name: 'Andrew',Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png"},
  {id: 3, name: 'Sveta',Ava:"https://imgur.com/I80W1Q0.png"},
  {id: 4, name: 'Sasha',Ava:"https://imgur.com/I80W1Q0.png"},
  {id: 5, name: 'Victor',Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png"},
  {id: 6, name: 'Valera',Ava:"https://image.flaticon.com/icons/png/512/186/premium/186313.png"}
],
friend: [
{foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Dimych' },
{foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Sasha' },
{foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'NIkita' }
],
newMessageChange: 'lets write',
messages: [
  {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
  {id: 2, messagea: "What are you going to do in the next week"},
  {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
  {id: 4, messagea: "What are you going to do in the next week"},
  {id: 5, message: "Ohh, it's realy you!? How long we haven't seen each other?))"}
],
}

const DialogsReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_TEXT:{
              return{...state, newMessageChange: " ", messages: [...state.messages, {id: 6, messagea: action.NewMessageBody}]}
                }
        case UPDATE_NEW_TEXT_BODY:{
            return{ ...state, newMessageChange: action.NewMessage}}
        default:
            return state;
    }
}

export const AddTextCreator=(NewMessageBody)=>({type: ADD_TEXT, NewMessageBody})
export const updateNewMessageTextCreator = (NewMessage) =>({type: UPDATE_NEW_TEXT_BODY, NewMessage: NewMessage})
export default DialogsReducer;