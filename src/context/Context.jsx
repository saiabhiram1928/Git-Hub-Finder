import React,{createContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



const Github_context=createContext()
const Context = ({children}) => {
    const [users, setusers] = useState([]);
    const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
    useEffect(()=>{
      if (loading===true) {
        fetchdata()
      } 
},[])
  //Seaching Users
 const fetchdata=async (text)=>{
  const params=new URLSearchParams({
    q:text
  })
         setLoading(true);
         const response=await fetch(`${process.env.REACT_APP_GITHUB_API}/search/users?${params}`)
         const {items}=await response.json()
         
         if(items.length>0){
          setusers(items)
          setLoading(false)
      
         }else{
          setLoading(false);
        return <>
        {
          <h1>Not loading</h1>
        }
            
        </>
   }
}  
//Geting Single User
const getUser = async (login)=>{
  
  setLoading(true);
    const response= await fetch(`${process.env.REACT_APP_GITHUB_API}/users/${login}`)

    if(response.status===404){
      window.location='/Notfound'
    }else{
      const data=await response.json()
      setUser(data)
      setLoading(false)
    }
}
// Fetcthing user repos
const getRepo= async (login)=>{
  const params=new URLSearchParams({
    sort:'created',
    per_page: 10,
    })
  setLoading(true)
  const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users/${login}/repos?${params}`)
  const data= await response.json()
  setRepos(data)
  setLoading(false)
}
const handleusers=()=>{
  setusers([])
}
  return <Github_context.Provider value={{
      users,loading,fetchdata,handleusers,getUser,user,getRepo,repos
  }}>
{children   }
  </Github_context.Provider>;
};

export default Context;
export {Github_context}
