import useSWR from 'swr';
import Job from './Job';
import {useState} from 'react';
// const fetcher = (url) => fetch(url).then((res) => {res.json();console.log(res)})

const Jobs = ({jobs}) => {
    // const { data, error } = useSWR('/api/jobs', fetcher);
    // console.log(data);
    const state = jobs.map((job, index) => {
        return {
            'id': index,
            'hide': false
        }
    })
    const [class_list, set_class_list] = useState(state);

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>
    var num = 0;
    for(var i = 0; i < jobs.length; i++)
        num += jobs[i].total_jobs_in_hospital;

    const handleClick = (id) => {
        set_class_list(class_list.map(c => {
            if(c.id === id) {
                c.hide = !c.hide;
            }
            return c;
        }))
    }


    return (
        <>
        <div className = 'bg-white w-full'>
            <div className = 'flex flex-row justify-between m-4 py-2 h-1/12'>
                <p className = ' w-2/4 ml-4 font-bold'>{num} job postings</p>
                <div className = 'invisible md:visible flex flex-row  justify-between w-2/4 font-bold'>
                    <p>sort</p>
                    <p>Location</p>
                    <p>Role</p>
                    <p>Department</p>
                    <p>Education</p>
                    <p>Experience</p>
                </div>
            </div>
            <div className = 'm-4 h-11/12'>
                {jobs.map((job, index) => {
                    return <Job  data = {job} handle = {handleClick} c = {class_list[index]} key = {index}/>
                })}
            </div>
        </div>
        </>
    ); 
}

export default Jobs;