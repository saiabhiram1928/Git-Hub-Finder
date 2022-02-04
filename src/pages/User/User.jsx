import React,{useEffect,useContext} from 'react';
import {Github_context} from '../../context/Context';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Social_media from './Social_media';
import Stats from './Stats';
import User_loading from '../../componets/loading/User_loading';
import Repo_list from './repos/Repo_list';

const User = () => {

  const {user,getUser,getRepo,repos} = useContext(Github_context);
  const params=useParams()
 useEffect(() =>{
    getUser(params.login)
    getRepo(params.login)

 },[])
 const {name,type,avatar_url,location,bio,twitter_username,blog,login,html_url,followers,following,public_repos,public_gists,hireable}=user
 

  return <div>
  
  <Link to="/">
     <div class="flex ">
     <button class="btn btn-link text-lg capitalize">
     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>back to users</button>
     </div>
     </Link>
   
<section class="text-gray-600 body-font">
<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
 <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
   <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Name : {name}
   <span className="mx-2 badge badge-success rounded-lg">{type}</span>
   {
    hireable ? ( 
      <span className="mx-2 badge badge-info rounded-lg">Hireable</span>
    ): (
      <span className="mx-2 badge badge-info rounded-lg">Not Hireable</span>
    )
  }
     <br class="hidden lg:inline-block uppercase"/>Github User Name : {login}
   </h1>
    { 
     bio ? ( <p class="mb-8 leading-relaxed">
      {bio}
     </p>) : ( <p class="mb-8 leading-relaxed font-medium">
     Bio not available
     </p>)
    }
    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-accent">Visit GitHub profile</a>
    <Social_media location={location} twitter_username={twitter_username} blog={blog}/>
  
    
 </div>
 <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 float-right mx-5">
   <img class="object-cover object-center rounded" alt="hero" src={avatar_url}/>
 </div>
</div>
</section>
<Stats followers={followers} following={following} public_repos={public_repos} public_gists={public_gists}/>
<h1 className="flex justify-center text-xl border-dashed border-2 border-transparent py-5 shadow-md">Recent Repos</h1>
  <div className="mx-10 mb-10">
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
      <thead>
							<tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Repo Name
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									language
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Created at
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Size
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Watchers
								</th>
							</tr>
						</thead>
      {
   repos.map((repo)=>{
    
     return <>
     <Repo_list repos={repo} key={repo.id}/>
     </>
    

  })}
   </table>
     </div>
     </div>


</div>
</div>

  
 

};

export default User;
