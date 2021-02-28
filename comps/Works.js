import Work from './Work';
import {useState} from 'react';

const Works = ({works}) => {
    const state = works.map((work) => {
        return {
            'id': work.job_id,
            'hide': false
        }
    })
    const [class_list, set_class_list] = useState(state);

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
           
            {works.map((work, index) => {
                    return <Work data = {work} handle = {handleClick} c = {class_list[index]} key = {index}/>
                })}
           
        </>
    );
}

export default Works;