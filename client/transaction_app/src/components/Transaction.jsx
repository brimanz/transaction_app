import React, {useContext} from "react";
import {TransactionContext} from '../context/TrasactionContext';
import dummyData from '../utils/dummyData';
import {shortenAddress} from '../utils/shortenAddress';
import useFetch from '../hooks/useFetch';


//reusable card component 
const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) =>{
	const gifUrl = useFetch({keyword})

	return (
		<div 
			className="white-glassmorphism m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px]
			flex-col p-3 rounded-md hover:shadow-2xl"
		>	
			<div 
				className="flex flex-col items-center w-full mt-3"
			>
				<div className="w-full mb-6 p-2">
					<a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
						<p className="text-white text-base">
							From: {shortenAddress(addressFrom)} <br/> 
							To: {shortenAddress(addressTo)}
						</p>
						<p className="text-white text-base">
							Amount: {amount} ETH
						</p>
					</a>

					{message && (
						<>
							<br/>
							<p className="text-white text-base">Message: {message}</p>
						</>
					)}

					<img 
						src={gifUrl || url} 
						alt="gif"
						className="w-full h-64 2x:h-80 rounded-md shadow-lg object-cover"
					/>

					<div className="white-glassmorphism p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl">
						<p 
							className="text-[#f64f59] font-bold"
						>
							{timestamp}
						</p>
					</div>
				</div>
			</div>
		</div>

	);
}


const Transaction = () =>{

	const {currentAccount, transactions} = useContext(TransactionContext);

	return(
		<div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
			<div className="flex flex-col md:p-12 py-12 px-4">
				{currentAccount 
				? (
					<h3 className="text-white text-3xl text-center my-2">
						Latest operations
					</h3>
				) : 
				(
					<h3 className="text-white text-3xl text-center my-2">
						Please conect yout wallet
					</h3>
				)}

				<div className="flex flex-wrap justify-center items-center mt-10">
					{transactions.reverse().map((transaction, i) => (
						<TransactionCard
							key={i}	
							{...transaction}
						/>
					))}
				</div>
			</div>
		</div>
	);
}


export default Transaction;