import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./homecrud.module.css"

const Editusers=()=>{

let [name, setName] = useState()
let [sal, setSal] = useState()
let [company, setCompany] = useState()
let navigate = useNavigate()
let {idie} = useParams()

console.log(idie);
useEffect(()=>{axios.get(`http://localhost:3000/Emp/${idie}`)
.then((response)=>{
setName(response.data.name)
setSal(response.data.sal)
setCompany(response.data.company)
})
.catch(()=>console.log('something went wrong'))},[idie])
let nameData = (e)=>setName(e.target.value)
let salData = (e)=>setSal(e.target.value)
let companyData = (e)=>setCompany(e.target.value)

let formHandle=()=>{
let payload = {name, sal, company}
axios.put(`http://localhost:3000/Emp/${idie}`,payload)
.then(()=>console.log('Data has been updated.'))
.catch(()=>console.log('Something went wrong.'))
navigate("/users")
}
return(
<div id={style.myForm}>
<form>
<h3>Update User</h3>
<label>Name</label>
<input type="text" value={name} onChange={nameData}/><br/>

<label>Salary</label>
<input type="number" value={sal} onChange={salData}/><br/>

<label>Company</label>
<input type="text" value={company} onChange={companyData}/><br/>

<button onClick={formHandle}>Submit</button>
</form>
</div>)
}
export default Editusers