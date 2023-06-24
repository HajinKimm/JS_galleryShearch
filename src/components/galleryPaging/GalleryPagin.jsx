import React from 'react';
import {GalleryPaginBox} from '../styled/galleryStyle.js'

const GalleryPagin = ({current, pageNumber, currentPage}) => {
    let pageNum = ([...Array(pageNumber).keys()].map(item=>item+1))
    //페이징버튼 클릭시 스크롤 맨위로
    const pagingUp=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <GalleryPaginBox>
            {
                pageNum.map(item=><span key={item} onClick={()=>{current(item); pagingUp()}} className={currentPage===item?'on':''}>{item}</span>)
            }
        </GalleryPaginBox>
    );
};

export default GalleryPagin;