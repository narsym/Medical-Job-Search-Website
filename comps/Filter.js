import axios from 'axios';

export const getStaticProps = async() => {
    const res = await axios.get('/api/filter');
    console.log(res);
    return {
        props: {
            data: res.data
        }
    }
}

const Filter = (props) => {
    const data = props.data;
    return (
        <>
        <h1> Hello </h1>
        </>
    );
}

export default Filter;