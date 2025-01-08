
import React, { useState } from 'react';

function BookingForm({ availableTimes, occasion }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
   
    /*const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "",
    });*/

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Details:", formData);
        alert(`Reservation made successfully for ${formData.guests} guest(s) on ${formData.date} at ${formData.time} for a ${formData.occasion}`);
    };

    return (
        <div>

            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/*Choose date */}
                        <legend>Make a Reservation</legend>
                        <div>
                            <label htmlFor='date'>Choose date:</label>
                            <input id='date' name='date' value={date} onChange={handleDateChange} type='date' required />
                        </div>
                        {/*Choose time */}
                        <div>
                            <label htmlFor='time'>Choose Time:</label>
                            <select id='time' name='time' value={time} onChange={handleTimeChange}>
                                <option value=''>Select time</option>
                                {availableTimes.map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*Choose number of guests */}
                        <div>
                            <label htmlFor='guests'>Number of Guests:</label>
                            <input id='guests' name='guests' value={guests} onChange={handleGuestsChange} type='number' min={1} required />
                        </div>
                        {/*Occasion */}
                        <div>
                            <label htmlFor='occasion'>Occasion:</label>
                            <select id='occasion' name='occasion' value={occasion} onChange={handleOccasionChange} required>
                                <option value=''>Select occasion</option>
                                {occasion.map((occasion, index) => (
                                    <option key={index} value={occasion}>
                                        {occasion}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*Submit button */}
                        <div className='btnReceive'>
                            <input type='submit' value='Make Your reservation' />
                        </div>
                    </fieldset>
                </form>
            </section>

        </div>
    )
}

export default BookingForm