import React,{useContext} from 'react';

const Repo_list = ({repos}) => {
    
  const {name,size,created_at,language,watchers_count,html_url}=repos
  const date=created_at.slice(0,10)
  
  return <>
						
						<tbody>
                        <tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
									<div class="flex items-center">
										
											<div class="ml-1">
                                                <a href={html_url} target="_blank" className="link link-hover flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
</svg>
												<p class="text-gray-900 whitespace-no-wrap text-lg font-extrabold">
												{name}
												</p>
                                                </a>
											</div>
										</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
									<p class="text-gray-900 whitespace-no-wrap">{language ? language:"Lang not mention"}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
									{date}
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										{size} KB
									</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-transparent text-sm">
									<span
                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
									<span class="relative">{watchers_count}</span>
									</span>
								</td>
							</tr>
							
                        </tbody>
                        </>;
};

export default Repo_list;
