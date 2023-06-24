import styled from 'styled-components'

//Gallery
export const Container = styled.div`
    width:${props=>props.width};
    margin:auto;
`

//GallerySearch
export const GallerySearchForm = styled.form`
    padding:30px;
    text-align:center;
    input {
    width:400px; height:50px;
    box-sizing:border-box; 
    outline:none;
    padding:0 20px;
    font-size:16px;
    } 
    button {
    width:120px; height:50px; border:none; background:#000; color:#fff; 
    vertical-align:top; 
    }
`

//GalleryList
export const GalleryListContainer=styled.div`
    .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    }
    .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
    }
`

//GalleryItem
export const GalleryItemBox = styled.article`
    margin-bottom:40px;
    box-shadow:5px 5px 10px #efefef;
    padding:15px 15px 35px; 
    border:1px solid #efefef;
    img { width:100% }
    h2 { font-size:25px;  color:hotpink; margin-bottom:15px; text-transform:uppercase; }
    ul { margin-bottom:20px;
        li { margin-bottom:5px }
    }
    p {
        span {
            display:inline-block; padding:3px 20px; border-radius:15px; 
            background:#efefef; margin-right:5px; 
        }
    }
`
//검색기록
export const SearchMemory = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    p{
        padding: 0px 20px;
        text-align: center;
        background: #eee;
        border-radius: 10px;
        margin-right: 20px;
        strong{
            padding-right: 10px;
            cursor: pointer;
            font-size: 18px;
        }
        i{
            cursor: pointer;
            vertical-align: middle;
        }
    }
`
//페이징
export const GalleryPaginBox = styled.div`
    text-align: center;
    margin: 20px 0px 50px ;
    span{
        cursor: pointer;
        border: 1px solid #000;
        display: inline-block;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 47px;
        font-size: 25px;
        margin-right: 10px;
        &.on{
            background: #000;
            color: #fff;
        }
    }
`