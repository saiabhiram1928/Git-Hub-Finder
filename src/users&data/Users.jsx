import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Users = ({users:{login,avatar_url,organizations_url}}) => {
  return <>
  <div class="p-4 relative mb-10 ">
    <div class="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
        <a href="#" class="block relative">
            <img alt="profil" src={avatar_url} class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"/>
        </a>
    </div>
    <div class="bg-transparent  rounded-lg shadow px-8 py-4 pt-24">
        <div class="text-center">
            <p class="text-2xl text-gray-800 dark:text-black">
               {login}
            </p>
            <Link to={`/users/${login}`} class="btn btn-ghost">
            <p class="text-xl text-gray-500 dark:text-gray-500 font-light capitalize">
              visit profile
            </p>
            </Link>
        </div>
    </div>
</div>

      </>
     ;
};

export default Users;
