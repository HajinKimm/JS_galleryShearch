import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import GallerySearchMemory from './GallerySearchMemory';
import GalleryPagin from './GalleryPagin';
import {Container} from '../styled/galleryStyle'

const Gallery = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [text, setText] = useState('')
    const [memory, setMemory] =useState([])
    const no = useRef(1)
    //페이징
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage , setPostPerPage] = useState(9)
    const totalGallery = data.length
    const lastPost = currentPage * postsPerPage
    const FirstPost = lastPost - postsPerPage
    const pageNumber = Math.ceil(totalGallery / postsPerPage)
    const currentPosts = data.slice(FirstPost, lastPost)
    const current = pageNumber => setCurrentPage(pageNumber)


    useEffect(()=>{
        const API_KEY = '36875442-b68909cdf3bbc37f8d54f62e2'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo&per_page=100`
        axios.get(url)
            .then(res=>{
                setData(res.data.hits)
                setLoading(true)
                setError(null)
            })
            .catch(error=>{
                setData([])
                setLoading(false)
                setError('api주소를 확인하세요')

            })
    },[text])

    //검색 및 검색기록 추가
    const onSearch=(text)=>{
        setText(text)
        setMemory([...memory, {id:no.current++ ,text}])
    }
    //검색기록 단어 클릭시 검색가능
    const onMemory =(id)=>{
        setText(memory.find(item=>item.id === id).text)
    }
    //검색기록 삭제
    const onDel=(id)=>{
        setMemory(memory.filter(item=>item.id !== id))
    }
    return (
        <Container width='1400px'>
            <GallerySearch onSearch={onSearch}/>
            <GallerySearchMemory memory={memory} onDel={onDel} onMemory={onMemory}/>
            <GalleryList data={currentPosts}/>
            <GalleryPagin current={current} pageNumber={pageNumber} currentPage={currentPage}/>
        </Container>
    );
};

export default Gallery;