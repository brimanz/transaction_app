import React from "react";
import logo from '../../images/logo.png';


const Footer = () =>{
	return(
		<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
			<div className="wl-full flex sm:flex-row flex-col justify-between items-center my-4">
				<div className="flex flex-[0.5] justify-center items-center mr-10">
					<img 
						src={logo} 
						alt="loguito"
						className="w-32"
					/>
				</div>

				<div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full ml-5">
					<p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
					<p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
				</div>
			</div>

			<div className="flex justify-center items-center flex-col mt-3">
				<p className="text-white text-sm text-center">
					The crypto platform for Venezuela
				</p>
			</div>
		</div>
	);
}


export default Footer;