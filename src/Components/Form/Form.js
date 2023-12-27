import { useState } from 'react';
// Css
import './Form.css';

function Form() {
    const [data , setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        massage: '',
        subject: ''
    });

    /* for checkValidity */
    const [valid , setValid] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
    };
    
    const clickHandler = () => {
        setValid(true);
    };

    return (
        <form action='undefined' method='post' onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='first-name'>first name <abbr title='required'>*</abbr></label>
                <input
                    type='text'
                    id='first-name'
                    className={`form-item ${valid && 'check-valid'}`}
                    required
                    onChange={e=>setData({...data , firstName: e.target.value.trim().toLowerCase()})}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='last-name'>last name</label>
                <input
                    type='text'
                    id='last-name'
                    className='form-item'
                    onChange={e=>setData({...data , lastName: e.target.value.trim().toLowerCase()})}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>email address <abbr title='required'>*</abbr></label>
                <input
                type='email'
                id='email'
                className={`form-item ${valid && 'check-valid'}`}
                required
                onChange={e=>setData({...data , email: e.target.value.trim().toLowerCase()})}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='phone-number'>phone number</label>
                <input
                    type='tel'
                    id='phone-number'
                    className='form-item'
                    onChange={e=>setData({...data , phoneNumber: e.target.value.trim().toLowerCase()})}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='subject'>subject</label>
                <input
                    type='text'
                    id='subject'
                    className='form-item'
                    onChange={e=>setData({...data , subject: e.target.value.trim().toLowerCase()})}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='massage'>how can we help? <abbr title='required'>*</abbr></label>
                <textarea
                    id='massage'
                    rows='5'
                    className={`form-item ${valid && 'check-valid'}`}
                    required
                    onChange={e=>setData({...data , massage: e.target.value.trim().toLowerCase()})}
                ></textarea>
            </div>

            <input
                type='submit'
                className='btn btn-primary'
                value='get free quote'
                onClick={clickHandler}
            />
        </form>
    );
}

export default Form;