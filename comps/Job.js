import Works from './Works';

const Job = ({data, handle, c}) => {
    return (
        <>
        <div className = 'm-4'>
            <div className = 'flex flex-row align-middle h-10 cursor-pointer' onClick = {() => handle(c.id)}>
                <p className = 'border-2 border-gray-400 bg-gray-400 text-white rounded-md h-8 w-8 font-bold uppercase'>{data.name.slice(0,2)}</p>
                <p className = 'font-bold m-2'>{data.total_jobs_in_hospital} for {data.name} </p>
            </div>
            <div className = {`${(c.hide == true)? '' : 'hidden'} `}>
                <Works works = {data.items}/>
            </div>
        </div>
        </>
    );
}

export default Job;