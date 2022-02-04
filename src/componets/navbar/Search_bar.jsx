import React,{useState,useContext} from 'react';
import {Github_context} from '../../context/Context';

const SearchBar = () => {
const [text, setText] = useState('');
const {fetchdata} = useContext(Github_context);
const handleText=(e)=> {
   setText(e.target.value)
 
}
const validation=text.length>0
const handleSubmit = (e) =>{
  e.preventDefault()
 if(validation){
   fetchdata(text)
   setText("")
 }
}




  return <form onSubmit={handleSubmit}>
<div class='max-w-md mx-auto'>
    <div class="relative flex  w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
     <button className={`btn ${(validation>0) && "btn-warning" } mr-4`} type='submit' disabled={validation ? false:true} required >
     <div class="grid place-items-center h-full w-8 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
     </button>
       

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        value={text}
        onChange={handleText}
        placeholder="Search something.." / > 
    </div>
</div>
</form>;
};

export default SearchBar;
