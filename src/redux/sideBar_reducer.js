
let initialState = {
  SideBar: [
    {id: 1, to: '/profile', name:'Profile'},
    {id: 2, to: '/dialogs', name:'Dialogs'},
    {id: 3,to: '/news', name:'News'},
    {id: 4, to: '/users', name:'Users'},
    {id: 4, to: '/music', name:'Music'},
    {id: 6, to: '/setting', name:'Setting'}

  ],
  friend: [
    {foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Dimych' },
    {foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'Sasha' },
    {foto: 'https://i.pinimg.com/originals/09/64/62/0964629356ee5e978b5801b6876f2205.jpg', name: 'NIkita' }]

};

const SideReducer = (state = initialState, action) =>{
 return state
}

export default SideReducer;