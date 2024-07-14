import { selector } from "recoil";
import { todoListAtom,filterAtom } from "./atom";

const todoListSelector = selector({
    key: "todoListSelector",
    get: ({ get }) =>{
        const list = get(todoListAtom)
        const filter = get(filterAtom)

        switch(filter){
            case "completed":
                return list.filter((item)=>item.isDone);
            case "rejected":
                return list.filter((item)=>!item.isDone)
                default:
                    return list
        }
    }
})
export { todoListSelector }