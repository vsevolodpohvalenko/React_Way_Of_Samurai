

const SET_TODO = 'SET-TODO'
const REMOVE_TO_DO_LIST = 'REMOVE_TO_DO_LIST'
const ADD_TO_DO_LIST = 'ADD_TO_DO_LIST'
const COMPLETED_TASK = 'COMPLETED-TASK'
let Initialstate = {
    items: [

    ]
}
export const ToDoReducer = (state = Initialstate, action) =>{
    switch(action.type){
        
        case ADD_TO_DO_LIST :
            let newTask = {
               id: (state.items.length+1),
                title: action.title}
            return {items : [...state.items, newTask]}
        case REMOVE_TO_DO_LIST : 
        return {
            ...state, items: state.items.filter(e => e.id != action.id)
        }
        case SET_TODO:
            return {
                ...state, items:  action.items.data
            }
        case COMPLETED_TASK :
            debugger
            return {...state, items: state.items.map(c=>{
                if(c.id === action.id) {
                    return{...c, completed: !c.completed}
                }
                return c;
            })}
        default:
            return state
    }
}


const addTask = (title) => ({type: ADD_TO_DO_LIST,title})
const SetToDOSuccess = (items) => ({type: SET_TODO, items})
const CompletedSuccess = (id) => ({type: COMPLETED_TASK, id})
const RemoveSuccess = (id) => ({type: REMOVE_TO_DO_LIST, id})
export const Completed = (id) => (dispatch) => {
            dispatch(CompletedSuccess(id));
          }
export const RemoveTask = (id) => (dispatch) =>{
    dispatch(RemoveSuccess(id))
}
export const SetToDO =(items) => (dispatch) => {
    debugger
    dispatch(SetToDOSuccess(items))

}
export const AddTask = (title) => (dispatch) =>{
    dispatch(addTask(title))
}