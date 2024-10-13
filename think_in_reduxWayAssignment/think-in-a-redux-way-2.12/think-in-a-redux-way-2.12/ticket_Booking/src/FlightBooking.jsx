
import { useState } from 'react';
import './styles.css';
import { ticketBooking } from './redux/bookingDetails/action';
import { useDispatch, useSelector } from 'react-redux';

const FlightBooking = () => {
  const ticket= useSelector((state)=>state.ticketBookingR.value);
  const dispatch=useDispatch();

  const [formData,setformData]=useState({
    from:'',
    to:'',
    date:'',
    guests:'',
    ticketClass:''

  })


 const handleFromData=(event)=>{
  const {name,value}=event.target;
  setformData({
    ...formData,
    [name]:value
  })

 }
 const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission
  console.log(formData);  // Log formData to console on form submission
  dispatch(ticketBooking(formData))
};

  return (
    <>
      <header id="header">
        <div className="container">
          <img src="./img/lws-logo.svg" alt="logo" className="logo" />
          <div className="flex items-center">
            <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>

      <section>
        {/* Input Data */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
              {/* From */}
              <div className="des-from">
                <p>Destination From</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select className="outline-none px-2 py-2 w-full" name="from" value={formData.from} onChange={handleFromData} id="lws-from" required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Coxs Bazar</option>
                  </select>
                </div>
              </div>

              {/* To */}
              <div className="des-from">
                <p>Destination To</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Frame.svg" alt="" />
                  <select className="outline-none px-2 py-2 w-full" name="to" value={formData.to} onChange={handleFromData} id="lws-to" required>
                    <option value="" hidden>Please Select</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Saidpur</option>
                    <option>Coxs Bazar</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="des-from">
                <p>Journey Date</p>
                <input type="date" className="outline-none px-2 py-2 w-full date" name="date" value={formData.date} onChange={handleFromData} id="lws-date" required />
              </div>

              {/* Guests */}
              <div className="des-from">
                <p>Guests</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (1).svg" alt="" />
                  <select className="outline-none px-2 py-2 w-full" name="guests" value={formData.guests} onChange={handleFromData} id="lws-guests" required>
                    <option value="" hidden>Please Select</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                  </select>
                </div>
              </div>

              {/* Class */}
              <div className="des-from !border-r-0">
                <p>Class</p>
                <div className="flex flex-row">
                  <img src="./img/icons/Vector (3).svg" alt="" />
                  <select className="outline-none px-2 py-2 w-full" name="ticketClass" value={formData.ticketClass} onChange={handleFromData

                  } id="lws-ticketClass" required>
                    <option value="" hidden>Please Select</option>
                    <option>Business</option>
                    <option>Economy</option>
                  </select>
                </div>
              </div>

              <button className="addCity" type="submit" id="lws-addCity">
                <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-sm">Book</span>
              </button>
            </form>
          </div>
        </div>

        {/* Preview Data */}
        <div className="table-container">
          <table className="booking-table">
            <thead className="bg-gray-100/50">
              <tr className="text-black text-left">
                <th>Destination From</th>
                <th>Destination To</th>
                <th className="text-center">Journey Date</th>
                <th className="text-center">Guests</th>
                <th className="text-center">Class</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
              {/* Row 1 */}
             {/* Display data from Redux (ticketBookingR.value) */}
             {ticket.map((booking, index) => (
                <tr key={index} className="lws-bookedTable text-black">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <p className="lws-bookedFrom">{booking.from}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="lws-bookedTo">{booking.to}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedDate">{booking.date}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <p className="lws-bookedGuests">{booking.guests}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="lws-bookedClass">{booking.ticketClass}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-4">
                      <button className="lws-remove">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default FlightBooking;
