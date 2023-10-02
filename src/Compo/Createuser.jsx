import style from "./homecrud.module.css"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateUser=()=>{
let [name, setName] = useState()
let [sal, setSal] = useState()
let [company, setCompany] = useState()

let navigate = useNavigate()

let nameData=(e)=>setName(e.target.value)
let salData=(e)=>setSal(e.target.value)
let companyData=(e)=>setCompany(e.target.value)

let formHandle=()=>{

let payload = {name, sal, company}
axios.post("http://localhost:3000/Emp",payload)
.then(()=>console.log("Data has been stored succesfully"))
.catch(()=>console.log("something went wrong"))
navigate("/users")
}

return(
<div id={style.myForm}>
<form>
<label>Name</label>
<input type="text" value={name} onChange={nameData}/><br/>

<label>Salary</label>
<input type="number" value={sal} onChange={salData}/><br/>

<label>Company</label>
<input type="text" value={company}
onChange={companyData}/><br/>

<button onClick={formHandle}>Submit</button>
</form>
</div>
)
}
export default CreateUser