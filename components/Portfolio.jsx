import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 text-center'>
            <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
            <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
                <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                    <Image src='https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                        width={600}
                        height={450}
                        responsive
                    />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                        width={200}
                        height={200}
                        responsive
                    />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                        width={200}
                        height={200}
                        responsive
                    />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                        width={200}
                        height={200}
                        responsive
                    />
                </div>
                <div className='w-full h-full'>
                    <Image src='https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                        width={200}
                        height={200}
                        responsive
                    />
                </div>

            </div>
            <div>

            </div>

        </div>
    );
}

export default Portfolio;
