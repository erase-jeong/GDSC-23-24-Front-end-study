import {useState} from 'react';
import './ReviewForm.css';
import FileInput from "./FileInput"

function ReviewForm(){

    const [values, setValues]=useState({
        title:'',
        rating:0,
        content:'',
    }); 
    /*const [title, setTitle]=useState('');
    const [rating, setRating]=useState(0);
    const [content, setContent]=useState('');
*/

/*
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }

    const handleRatingChange=(e)=>{
        const nextRating=Number(e.target.value)||0;  //or 연산자 사용 -> 입력값이 숫자가 아닌 경우 처리
        setRating(nextRating);
    }

    const handleContentChange=(e)=>{
        setContent(e.target.value);
    }
*/
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value,
            //[name]: name의 값으로 property값을 지정하고
            //여기에 해당하는 값을 value로 지정
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
        // console.log({
        //     title,
        //     rating,
        //     content
        // })
        //setContent(e.target.value);
    }

    return (
    <form className="ReveiwForm" onSubmit={handleSubmit}> <p></p>
        <FileInput /><p></p>
        제목 : <input name="title" value={values.title} onChange={handleChange}></input> <p></p>
        평점 : <input name="rating" type="number" value={values.rating} onChange={handleChange}></input> <p></p> 
        내용 : <textarea name="content" value={values.content} onChange={handleChange}/> <p></p>
        <button type="submit ">확인</button>
    </form>
    
    );
}

export default ReviewForm;

