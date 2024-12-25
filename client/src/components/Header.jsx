import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendar, faCar, faLandmark, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Header = () => {
	const [showDate, setShowDate] = useState(false);

	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	const [showOptions, setShowOptions] = useState(false);

	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1
	});

	const handleOptions = (name, operation) => {
		setOptions(prev => {
			return {
				...prev,
				[name]: operation == 'increase' ? prev[name] + 1 : prev[name] - 1
			};
		});
	};

	return (
		<div className='header bg-sky-950 h-80 flex justify-center text-white'>
			<div className='header-container w-full max-w-screen-lg p-3 relative'>
				<ul className='flex gap-14 mb-14 items-center'>
					<li className='border border-white rounded-full py-2 px-4'>
						<FontAwesomeIcon icon={faBed} />
						<span className='ml-2'>Stays</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faPlane} />
						<span className='ml-2'>Flights</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faCar} />
						<span className='ml-2'>Car rentals</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faLandmark} />
						<span className='ml-2'>Attractions</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faTaxi} />
						<span className='ml-2'>Airport taxis</span>
					</li>
				</ul>

				<div className='flex flex-col gap-5'>
					<h1 className='font-bold text-3xl'>A lifetime of discounts? It&apos;s Genius.</h1>
					<p>
						Get rewarded for your travels - unlock instant savings of 10% or more with a free Let&apos;s Go account.
					</p>
					<button className='self-start bg-sky-600 py-1 px-4 cursor-pointer'>Sign in / Register</button>
				</div>

				<div className='h-10 py-5 absolute -bottom-5  flex justify-around items-center bg-white text-gray-400 border-4 border-yellow-500 rounded-md w-full'>
					<div>
						<FontAwesomeIcon icon={faBed} />
						<input type='search' placeholder='Where are you going?' className='ml-2' />
					</div>
					<div className='relative'>
						<FontAwesomeIcon icon={faCalendar} />
						<span className='ml-2' onClick={() => setShowDate(!showDate)}>{`${format(
							date[0].startDate,
							'dd/MM/yyyy'
						)} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
						{showDate && (
							<DateRange
								className='absolute top-10 left-0 z-10'
								editableDateInputs={true}
								onChange={item => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
							/>
						)}
					</div>
					<div className='relative'>
						<FontAwesomeIcon icon={faPerson} />
						<span
							className='ml-2'
							onClick={() => setShowOptions(!showOptions)}
						>{`${options.adult} Adult(s) · ${options.children} Children · ${options.room} Room(s)`}</span>
						{showOptions && (
							<div className='bg-white text-black absolute top-10 shadow-lg rounded-md px-4 py-2 w-full z-10'>
								<div className='flex justify-between items-center my-2'>
									<span>Adult(s)</span>
									<div className='flex items-center gap-3'>
										<button
											className='border border-sky-500 w-7 h-7 disabled:cursor-not-allowed'
											onClick={() => handleOptions('adult', 'decrease')}
											disabled={options.adult <= 1}
										>
											-
										</button>
										<span>{options.adult}</span>
										<button
											className='border border-sky-500 w-7 h-7'
											onClick={() => handleOptions('adult', 'increase')}
										>
											+
										</button>
									</div>
								</div>
								<div className='flex justify-between items-center my-2'>
									<span>Children</span>
									<div className='flex items-center gap-3'>
										<button
											className='border border-sky-500 w-7 h-7 disabled:cursor-not-allowed'
											onClick={() => handleOptions('children', 'decrease')}
											disabled={options.children <= 0}
										>
											-
										</button>
										<span>{options.children}</span>
										<button
											className='border border-sky-500 w-7 h-7'
											onClick={() => handleOptions('children', 'increase')}
										>
											+
										</button>
									</div>
								</div>
								<div className='flex justify-between items-center my-2'>
									<span>Room(s)</span>
									<div className='flex items-center gap-3'>
										<button
											className='border border-sky-500 w-7 h-7 disabled:cursor-not-allowed'
											onClick={() => handleOptions('room', 'decrease')}
											disabled={options.room <= 1}
										>
											-
										</button>
										<span>{options.room}</span>
										<button className='border border-sky-500 w-7 h-7' onClick={() => handleOptions('room', 'increase')}>
											+
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
					<div>
						<button className='bg-sky-600 py-1 px-4 cursor-pointer text-white'>Search</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
