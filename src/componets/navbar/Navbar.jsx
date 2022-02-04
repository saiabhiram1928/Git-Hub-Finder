import React from 'react';
import SearchBar from './Search_bar';
import { NavLink,Link } from 'react-router-dom';


const Navbar = () => {
  return <div>
     
	
	<section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 card glass shadow border-2 border-t-stone-300">
		<div id="tabs" className="flex justify-between">
			<Link to="/" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fill-opacity="0.1"></path>
			        <path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>
			        <path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.1"></path>
			        <rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>
			        <rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>
			    </g>
				</svg>
				<span className="tab tab-home block text-xs">Home</span>
			</Link>
			
			<Link to="/Explore" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
				<svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
			    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		        	<path d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z" fill="currentColor" opacity="0.1"></path>
		        	<path d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z" fill="currentColor" transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "></path>
		        	<circle stroke="currentColor" stroke-width="2" cx="21" cy="21" r="20"></circle>
		    		</g>
					</svg>
				<span className="tab tab-explore block text-xs">Explore</span>
				</Link>
		
		
			<div className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1 my-auto">
			<SearchBar/>
			</div>
			
		</div>
		
	</section>
	
    
</div>;
};

export default Navbar;
