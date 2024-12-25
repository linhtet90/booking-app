import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendar,
  faCar,
  faLandmark,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
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
      key: 'selection',
    },
  ]);

  const [showOptions, setShowOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation == 'increase' ? prev[name] + 1 : prev[name] - 1,
      };
    });
  };

  return (
    <div className="header flex h-80 justify-center bg-sky-950 text-white">
      <div className="header-container relative w-full max-w-screen-lg p-3">
        <ul className="mb-14 flex items-center gap-14">
          <li className="rounded-full border border-white px-4 py-2">
            <FontAwesomeIcon icon={faBed} />
            <span className="ml-2">Stays</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlane} />
            <span className="ml-2">Flights</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCar} />
            <span className="ml-2">Car rentals</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLandmark} />
            <span className="ml-2">Attractions</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTaxi} />
            <span className="ml-2">Airport taxis</span>
          </li>
        </ul>

        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold">
            A lifetime of discounts? It&apos;s Genius.
          </h1>
          <p>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Let&apos;s Go account.
          </p>
          <button className="cursor-pointer self-start bg-sky-600 px-4 py-1">
            Sign in / Register
          </button>
        </div>

        <div className="absolute -bottom-5 flex h-10 w-full items-center justify-around rounded-md border-4 border-yellow-500 bg-white py-5 text-gray-400">
          <div>
            <FontAwesomeIcon icon={faBed} />
            <input
              type="search"
              placeholder="Where are you going?"
              className="ml-2"
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faCalendar} />
            <span
              className="ml-2"
              onClick={() => setShowDate(!showDate)}
            >{`${format(
              date[0].startDate,
              'dd/MM/yyyy'
            )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
            {showDate && (
              <DateRange
                className="absolute left-0 top-10 z-10"
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faPerson} />
            <span
              className="ml-2"
              onClick={() => setShowOptions(!showOptions)}
            >{`${options.adult} Adult(s) · ${options.children} Children · ${options.room} Room(s)`}</span>
            {showOptions && (
              <div className="absolute top-10 z-10 w-full rounded-md bg-white px-4 py-2 text-black shadow-lg">
                <div className="my-2 flex items-center justify-between">
                  <span>Adult(s)</span>
                  <div className="flex items-center gap-3">
                    <button
                      className="h-7 w-7 border border-sky-500 disabled:cursor-not-allowed"
                      onClick={() => handleOptions('adult', 'decrease')}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      className="h-7 w-7 border border-sky-500"
                      onClick={() => handleOptions('adult', 'increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <span>Children</span>
                  <div className="flex items-center gap-3">
                    <button
                      className="h-7 w-7 border border-sky-500 disabled:cursor-not-allowed"
                      onClick={() => handleOptions('children', 'decrease')}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      className="h-7 w-7 border border-sky-500"
                      onClick={() => handleOptions('children', 'increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="my-2 flex items-center justify-between">
                  <span>Room(s)</span>
                  <div className="flex items-center gap-3">
                    <button
                      className="h-7 w-7 border border-sky-500 disabled:cursor-not-allowed"
                      onClick={() => handleOptions('room', 'decrease')}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      className="h-7 w-7 border border-sky-500"
                      onClick={() => handleOptions('room', 'increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <button className="cursor-pointer bg-sky-600 px-4 py-1 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
