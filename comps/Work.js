import {useRef, useState} from 'react'

const Work = ({data, handle, c}) => {
    const date = new Date(data.created);
    const today = new Date();
    return (
        <>
        <div className = 'm-3'>
            <hr/>
            <div className = 'cursor-pointer' onClick = {() => handle(c.id)}>
                <p className = 'font-bold'>{data.job_title}</p>
                <div className = 'flex flex-row justify-between' >
                    <p>{data.job_type} | {data.salary_range[0]}k - {data.salary_range[1]}k an hour | {data.city}</p>
                    <p>{Math.round((today.getTime() - date.getTime())/ 604800000)} weeks ago</p>
                </div>
            </div>
            <div className = {`w-full flex flex-row ${(c.hide == true)? '' : 'hidden'}`}>
                <div className = 'w-4/5'>
                    <div className = 'w-full flex flex-row'>
                        <p className = 'font-bold w-1/2'>Department:</p>
                        <p className = 'w-1/2'>{data.department.join(',')}</p>
                    </div>
                    <div className = 'w-full flex flex-row'>
                        <p className = 'font-bold w-1/2'>Hours/Shift:</p>
                        <p className = 'w-1/2'>{data.hours} Hours / {data.work_schedule} </p>
                    </div>
                    <div className = 'w-full flex flex-row'>
                        <p className = 'font-bold w-1/2'>Summary:</p>
                        <p className = 'w-1/2'>{data.description}</p>
                    </div>
                    
                </div>
                <div className = 'flex flex-col justify-center items-end w-1/5'>
                    <p className = 'border-2 rounded-lg border-blue-400 px-2 py-1 text-white bg-blue-400 w-28 '>Job Details</p>
                    <p className = 'border-2 rounded-lg border-blue-400 px-2 py-1 text-blue-400 w-24'>Save Job</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Work;