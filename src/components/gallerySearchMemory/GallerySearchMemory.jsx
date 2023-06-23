import {SearchMemory} from '../styled/galleryStyle.js'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const GallerySearchMemory = ({memory, onDel, onMemory}) => {
    return (
        <SearchMemory>
            {
                memory.map((item)=> <p key={item.id}> 
                            <strong onClick={()=>onMemory(item.id)}>{item.text}</strong> 
                            <i onClick={()=>onDel(item.id)}><AiOutlineCloseCircle /></i> 
                        </p> )
            }
        </SearchMemory>
    );
};

export default GallerySearchMemory;