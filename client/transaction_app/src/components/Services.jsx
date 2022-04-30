import React from "react";
import {BsShieldFillCheck} from 'react-icons/bs';
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';


//reusable card component 
const ServiceCard = ({color, icon, title, subtitle}) =>(
	<div className="flex flex-row w-full justify-start items-center white-glassmorphism p-3 m-4 cursor-pointer hover:shadow-xl">
		<div className={`w-8 h-8 rounded-full flex justify-center items-center ${color}`}>
			{icon}
		</div>
		<div className="ml-5 flex-col -flex-1">
			<h1 className="mt-2 text-md text-white">{title}</h1>
			<p className="mt-2 text-sm text-white md:w-9/12">{subtitle}</p>
		</div>
	</div>
)

const Services = () =>{
	return(
		<div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
			<div className="flex mf:flex-row flex-col items-center justify-beteween md:p-10 py-3">
				<div className="flex-1 flex flex-col justify-start items-start">
					<h1 
						className="text-white text-3xl sm:text-5x1 text-gradient"
					>Our services
					</h1>
				</div>
			</div>
				<ServiceCard
					color="bg-[#56ab2f]"
					title="Safety is paramount"
					icon={<BsShieldFillCheck fontSize={16} className="text-white"/>}
					subtitle="All responsible"
				/>
				<ServiceCard
					color="bg-[#2952E3]"
					title="Integrity and Trust"
					icon={<BiSearchAlt fontSize={16} className="text-white"/>}
					subtitle="Only for you"
				/>
				<ServiceCard
					color="bg-[#f64f59]"
					title="Faster transactions"
					icon={<RiHeart2Fill fontSize={16} className="text-white"/>}
					subtitle="We are the best"
				/>
		</div>
	);
}


export default Services;