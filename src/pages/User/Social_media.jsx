import React from 'react';

const Social_media = ({location,blog,twitter_username}) => {
  if (location || blog || twitter_username) {
    
  
  return <div>
   
   
   <section class="text-gray-600 body-font border-2 border-transparent shadow-lg my-5">
  <div class="container px-8 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      {
        location && (
          <>
            <div class="px-2 sm:w-1/4 w-1/2">
          <h2 class=" text-gray-900 ">Location</h2>
          <p class="text-clip overflow-visible">{location}</p>
        </div>
        
          </>
        
        )
      }
    {
      blog && (<div class="divider divider-vertical"></div> )
    }
     {
       blog && (
         <>
          <div class="mr-5 sm:w-1/4 w-1/2">
        <h2 class=" text-gray-900 ">Website</h2>
        <p class="text-ellipsis overflow-hidden">
          <a href={`https://${blog}`} target="_blank" rel="noreferrer">{blog}</a></p>
      </div>
      
         </>
       )
     }
{
  twitter_username && (
    <div class="divider divider-vertical"></div> 
  )
}

     {
       twitter_username &&(
         <>
            <div class=" sm:w-1/4 w-1/2">
        <h2 class=" text-gray-900">Twitter</h2>
        <p class=" text-clip"><a href={`https://twitter.com/${twitter_username}`}>{twitter_username}</a></p>
      </div> 
         </>
       )
     }
   
     
    </div>
  </div>
</section>
  </div>;
}
else{
  return null
}
};

export default Social_media;
