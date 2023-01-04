import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import ReservePhoto from "../../assets/images/view/maxresdefault.jpg";
import "../../styles/background.css"
const Demo = () => {
    const [value, onChange] = useState(new Date());

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();


        alert("Your reservation has been successfully registered. We will be glad to see you at our place 😍");
    };
    return (

        <div className='generalreservation' style={{ backgroundImage: `url(${ReservePhoto})` }} >
            
            <div className='allitems'  >
            <form onSubmit={handleSubmit}>

                <div className='formitem'>
                    <label htmlFor="text">Fullname:</label>
                    <input id="text" type="text" ref={passwordRef} />
                </div>
                <div className='formitem'>
                    <label htmlFor="email">Email:  </label>
                    <input id="email" type="email" ref={emailRef} />
                </div>
                <div className='formitem'>
                    <label htmlFor="text">Telephone:</label>
                    <input id="text" type="text" ref={passwordRef} />
                </div>
                <div className='formitem'>
                <label htmlFor="text">Location:</label>
                    <select>
                        <option value="Cabinet">Cabinet</option>
                        <option value="Bar">Bar</option>
                        <option selected value=" Hall">Hall</option>
                        <option value="Terras">Terras</option>
                    </select>
                </div>
                <div className='formitem'>
                    <label htmlFor="number">Guests :</label>
                    <input id="number" type="number" ref={passwordRef} />
                </div> <div className='formitem'>
                <DateTimePicker onChange={onChange} value={value} />
            </div>
                <button type="submit" className='submit-btn'>Submit</button>
            </form>
           </div>
        </div>
    );
}
export default Demo;