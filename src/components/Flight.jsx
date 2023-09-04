import React, { useState } from "react";
import FrameSvg from "../assets/icons/Frame.svg";
import Vactor1 from "../assets/icons/Vector (1).svg";
import Vactor3 from "../assets/icons/Vector (3).svg";
import BookingList from "./BookingList";
import { useDispatch } from "react-redux";
import { bookingFlight } from "../redux/FlightBook/actionsCreators";

const Flight = () => {
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [journeyDate, setJournyDate] = useState("");
  const [guest, setGuest] = useState("");
  const [classNameType, setclassNameType] = useState("");
  const dispatch = useDispatch();

  const handelSumbitBookingDetail = (e) => {
    e.preventDefault();
    const flightBookDetail = {
      id: Math.random() * 10,
      destinationFrom: destinationFrom,
      destinationTo: destinationTo,
      journeyDate: journeyDate,
      guest: guest,
      classNameType: classNameType,
    };
    dispatch(bookingFlight(flightBookDetail));
    setDestinationFrom("");
    setDestinationTo("");
    setJournyDate("");
    setGuest("");
    setclassNameType("");
  };

  return (
    <section>
      {/* <!-- Input Data --> */}
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form
            className="first-hero lws-inputform"
            onSubmit={handelSumbitBookingDetail}
          >
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={FrameSvg} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  value={destinationFrom}
                  required
                  onChange={(e) => setDestinationFrom(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={FrameSvg} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  value={destinationTo}
                  onChange={(e) => setDestinationTo(e.target.value)}
                  id="lws-to"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                value={journeyDate}
                onChange={(e) => setJournyDate(e.target.value)}
                required
              />
            </div>

            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={Vactor1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- className --> */}
            <div className="des-from !border-r-0">
              <p>className</p>
              <div className="flex flex-row">
                <img src={Vactor3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketclassName"
                  id="lws-ticketclassName"
                  required
                  value={classNameType}
                  onChange={(e) => setclassNameType(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity">
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Preview Data --> */}
      <BookingList />
    </section>
  );
};

export default Flight;
