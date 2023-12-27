import { useState } from 'react';
// Css
import './../Form/Form.css';
import './Leave-Comment.css';

function LeaveComment() {
    const [data , setData] = useState({
        massage: '',
        name: '',
        email: '',
        website: '',
        isAssented: ''
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
        <section className='leave-comment' id='leave-comment'>
            <h3 className='title-sm'>leave a comment</h3>

            <form action='undefined' method='post' onSubmit={submitHandler}>
                <textarea 
                    placeholder='comment...' name='massage' rows='5'
                    className={`form-item ${valid && 'check-valid'}`}
                    required
                    onChange={e => setData({...data , massage: e.target.value.trim().toLowerCase()})}
                ></textarea>

                <div className='form-group'>
                    <input 
                        type='text' 
                        placeholder='name *'
                        name='name'
                        className={`form-item ${valid && 'check-valid'}`} 
                        required
                        onChange={e => setData({...data , name: e.target.value.trim().toLowerCase()})}
                    />

                    <input
                        type='email'
                        placeholder='email *'
                        name='email'
                        className={`form-item ${valid && 'check-valid'}`}
                        required
                        onChange={e => setData({...data , email: e.target.value.trim().toLowerCase()})}
                    />

                    <input
                        type='url'
                        placeholder='website'
                        name='website'
                        className='form-item'
                        onChange={e => setData({...data , website: e.target.value.trim().toLowerCase()})}
                    />
                </div>

                <div className='form-group checkbox'>
                    <input
                        type='checkbox'
                        id='save-comment'
                        value='Save my name, email, and website in this browser for the next time I comment.'
                        onChange={e => setData({...data , isAssented: e.target.checked})}
                    />
                    <label htmlFor='save-comment'>Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <input
                    type='submit'
                    className='btn btn-primary'
                    value='post comment'
                    onClick={clickHandler}
                />
            </form>
        </section>
    );
}

export default LeaveComment;