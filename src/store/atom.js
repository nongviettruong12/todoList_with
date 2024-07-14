import { atom } from 'recoil'

const todoListAtom = atom({
    key:'todoList',
    default:[
        {todo:"task not completed",isDone:false},
        {todo:"task completed",isDone:true}
    ]
})
const filterAtom = atom({
    key:'filter',
    default:'all'
})
export { todoListAtom, filterAtom}