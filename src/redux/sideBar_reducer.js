
let initialState = {
  SideBar: [
    {id: 1, to: '/profile', name:'Profile'},
    {id: 2, to: '/dialogs/1', name:'Dialogs'},
    {id: 3, to: '/news', name:'News'},
    {id: 4, to: '/users', name:'Users'},
    {id: 5, to: '/ToDoList', name:'Keep Notes'},
    {id: 6, to: '/setting', name:'Setting'}

  ],
  friend: [
    {id: 1 , foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Dimych' },
    {id: 2,foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Sasha' },
    {id: 3,foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'NIkita' }]

};

const SideReducer = (state = initialState, action) =>{
 return state
}

export default SideReducer;