
const UPDATE_NEW_TEXT_BODY = 'UPDATE-NEW-TEXT-BODY'
const ADD_TEXT  = 'ADD-TEXT'

let initialState ={

speakers: [
  {id: "1", name: 'Dimych', photo:"https://imgur.com/I80W1Q0.png",
  messages: [
    {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 2, messagea: "What are you going to do in the next week"},
    {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 4, messagea: "What are you going to do in the next week"},
    {id: 5, message: "Ohh, it's realy you!? How long we haven't seen each other?))"}
  ]
},
  {id: "2", name: 'Andrew', photo:"https://image.flaticon.com/icons/png/512/186/premium/186313.png",
  messages: [
    {id: 1, message: "There are many variations of passages"},
    {id: 2, messagea: "of Lorem Ipsum available, but the majority have suffered alteration in"},
    {id: 3, message: "If you are going to use a passage of Lorem"},
    {id: 4, messagea: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words"},
    {id: 5, message: "The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics))"}
  ]
},
  {id: "3", name: 'Sveta', photo:"https://imgur.com/I80W1Q0.png",
  messages: [
    {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 2, messagea: "but also the leap into electronic typesetting, remaining essentially unchanged"},
    {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 4, messagea: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "},
    {id: 5, message: "это 3"}
  ]
  },
  {id: "4", name: 'Sasha', photo:"https://imgur.com/I80W1Q0.png",
  messages: [
    {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 2, messagea: "What are you going to do in the next week"},
    {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 4, messagea: "What are you going to do in the next week"},
    {id: 5, message: "это 4"}
  ]
},
  {id: "5", name: 'Victor', photo:"https://image.flaticon.com/icons/png/512/186/premium/186313.png",
  messages: [
    {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 2, messagea: "What are you going to do in the next week"},
    {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 4, messagea: "What are you going to do in the next week"},
    {id: 5, message: "Это 5"}
  ]
},
  {id: "6", name: 'Valera', photo:"https://image.flaticon.com/icons/png/512/186/premium/186313.png",
  messages: [
    {id: 1, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 2, messagea: "What are you going to do in the next week"},
    {id: 3, message: "Hi man, I've just do this. It is smth incredible. Do you want to look it?"},
    {id: 4, messagea: "What are you going to do in the next week"},
    {id: 5, message: "Это 6"}
  ]
}
],
friend: [
{photo: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Dimych' },
{photo: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Sasha' },
{photo: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'NIkita' }
]
}

const DialogsReducer = (state = initialState, action) =>{

    switch(action.type) {
        case ADD_TEXT:{
          debugger
              return{...state, speakers: state.speakers.map(s=> {if(s.id == action.id){
                return {...s, messages: [...s.messages, {id: s.messages.length+1, messagea: action.messagea}]}
              } else{return {...s}}}
            
              )
            }  
              }
        case UPDATE_NEW_TEXT_BODY:{
            return{ ...state, newMessageChange: action.NewMessage}}

        default:
            return state;
    }
    
}

const AddTextCreator=(id,messagea)=>({type: ADD_TEXT, id, messagea})
export const updateNewMessageTextCreator = (NewMessage) =>({type: UPDATE_NEW_TEXT_BODY, NewMessage: NewMessage})
export const AddText = (id,messagea)=> (dispatch) => {
  dispatch(AddTextCreator(id,messagea))
}
export default DialogsReducer;


