import { useState } from 'react';
import {GallerySearchForm} from '../styled/galleryStyle.js'

const GallerySearch = ({onSearch}) => {
    const [text, setText]= useState('')
    

    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text) return
        onSearch(text)
        setText('')
    }
    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
            <button type='submit'>검색</button>
        </GallerySearchForm>
    );
};

export default GallerySearch;