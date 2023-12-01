import {useState} from 'react';
import './ReviewForm.css';

function ReviewForm(){
    const [title, setTitle]=useState('');
    const [rating, setRating]=useState(0);
    const [content, setContent]=useState('');

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

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({
            title,
            rating,
            content
        })
        //setContent(e.target.value);
    }

    return (
    <form className="ReveiwForm" onSubmit={handleSubmit}> <p></p>
        제목 : <input value={title} onChange={handleTitleChange}></input> <p></p>
        평점 : <input type="number" value={rating} onChange={handleRatingChange}></input> <p></p> 
        내용 : <textarea value={content} onChange={handleContentChange}/> <p></p>
        <button type="submit ">확인</button>
    </form>
    
    );
}

export default ReviewForm;

