import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json())

const Jobs = () => {
    const { data, error } = useSWR('/api/jobs', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <>
        {data.jobs.map((job) => {
            return <h3 >{job.name}</h3>
        })}
        </>
    ); 
}

export default Jobs;