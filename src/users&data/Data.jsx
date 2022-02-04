import React,{useContext} from 'react';
import {Github_context} from '../context/Context';
import Users from './Users';
import Loading from '../componets/loading/users_loading';


const Data = () => {
  const {users,loading,handleusers} = useContext(Github_context);
  
    if(!loading){
        return <>
        {users.length > 0 && (
        <button className="btn btn-accent float-right fixed bottom-24 right-10 " onClick={handleusers}>Clear</button>
        )}
       
      <div className="grid md:grid-cols-2  gap-8 ml-10 "> 
     
        {
           users.map((user)=>{
            
             return <>
            
             <Users key={user.node_id} users={user}/>
             </>
           })
       } 
     </div>
     </>;
    }
    else{
      return <>
       
       <div className="grid md:grid-cols-2  gap-8 ml-10 "> 
     
     {
        users.map((user)=>{
         
          return <>
         
         <Loading/>
          </>
        })
    } 
  </div>
      </>
    }
  
};

export default Data;

