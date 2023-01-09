import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-[1240] m-auto p-4 h-screen'>
            <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
            <form className='max-w-[600px] m-auto' action="https://getform.io/f/e7c6dff1-8b46-452d-bbbd-3f0eb33c73b7" method="POST">
                <div className='grid grid-cols-2 gap-2'>
                    <input className='border shadow-lg p-3' type='text' placeholder='Name' name='name' />
                    <input className='border shadow-lg p-3' type='email' placeholder='Email' name='email' />
                </div>
                <input className='border shadow-lg p-3 w-full my-2' type='text' placeholder='Subject' name='subject' />
                <textarea className='border shadow-lg p-3 w-full' placeholder='Message' cols='30' rows='10' name='message' />
                <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
