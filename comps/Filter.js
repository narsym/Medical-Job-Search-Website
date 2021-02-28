import filters from '../data/filters.json';



const Filter = ({data}) => {
    const handle = () => {
        document.getElementById('modal').classList.remove('hidden');
    }
    
    return (
        <>
        <div>
        <div className = 'bg-white m-4'>
            <p className = 'font-bold text-lg ml-2'>Job Type</p>
            {filters.job_type.map((jt) => {
                return (
                    <div className = 'flex flex-row m-4'>
                        <p className = 'font-bold'>{jt.key}:</p>
                        <p>{jt.doc_count}</p>
                    </div>
                );
            })}
        </div>
        <div className = 'bg-white m-4'>
            <p className = 'font-bold text-lg ml-2'>Department</p>
            {filters.department.slice(0, 8).map((d) => {
                return (
                    <div className = 'm-2'>
                        <p className = 'font-bold'>{d.key}</p>
                        <p>{d.doc_count}</p>
                    </div>
                );
            })}
            <p className = 'text-blue-500 cursor-pointer' onClick = {handle}> show more</p>
        </div>
        <div className = 'bg-white m-4'>
            <p className = 'font-bold text-lg ml-2'>Work Schedule</p>
            {filters.work_schedule.map((ws) => {
                return (
                    <div className = 'flex flex-row m-4'>
                        <p className = 'font-bold'>{ws.key}:</p>
                        <p>{ws.doc_count}</p>
                    </div>
                );
            })}
        </div>
        <div className = 'bg-white m-4'>
            <p className = 'font-bold text-lg ml-2'>Experience</p>
            {filters.experience.map((e,index) => {
                return (
                    <div className = 'flex flex-row m-4' key = {index}>
                        <p className = 'font-bold'>{e.key}:</p>
                        <p>{e.doc_count}</p>
                    </div>
                );
            })}
        </div>
        </div>
        
        </>
    );
}


export default Filter;