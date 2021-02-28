import Jobs from './Jobs';
import Filter from './Filter';
import jobs from '../data/jobs';
import { useState } from 'react';

const Content = () => {
    let [data, setData] = useState(jobs);
    const [name, setName] = useState('');
    const handle = (e) => {
        setName(e.target.value);
        if(name === '')
            setData(jobs);
    }
    const handleChange = (e) => {
        let val = name;
        let d = [];
        for(var i = 0; i < jobs.length; i++ ) {
            let h = {
                ...jobs[i],
                "items": jobs[i].items.filter(job => (job.job_title.toLowerCase().includes(val.toLowerCase())))
            };
            h.total_jobs_in_hospital = h.items.length;
            if(h.items.length != 0)
                d.push(h);
        }
        setData(d);
        
    }
    return (
        <>
        <div className = 'm-4 flex flex-col justify-center'>
            <input placeholder = 'search for any job' onChange = {handle} className = 'w-screen h-10 m-4'/>
            <button onClick = {handleChange} className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full items-center'>Search</button>
        </div>
        <div className = 'flex flex-row w-full m-4'>
            <div className = 'hidden md:w-1/5 md:flex'><Filter/></div>
            <div className = 'w-full md:w-4/5'><Jobs jobs = {data}/></div> 
        </div>
        </>
    );
}

export default Content;