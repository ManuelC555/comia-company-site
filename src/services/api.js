const API_URL = 'http://localhost:5000/api'
export async function fetchProjects(){
const res = await fetch(`${API_URL}/projects`)
if(!res.ok) throw new Error('Failed to fetch')
return await res.json()
}
export async function fetchProject(id){
const res = await fetch(`${API_URL}/projects/${id}`)
if(!res.ok) throw new Error('Failed to fetch project')
return await res.json()
}
export async function sendContact(payload){
const res = await fetch(`${API_URL}/contact`,{
method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
})
return await res.json()
}