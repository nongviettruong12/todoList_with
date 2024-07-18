import { atom,useRecoilState } from 'recoil'

const counter = atom({
    key:"myCounter",
    default:0
})
function Counter() {
    const [count, setCount] = useRecoilState(counter)
    const increament = () => setCount(count + 1)

    return 
    <div>
     count: {count}
     <button onClick={increament}>click here<button/>
    <div/>
}