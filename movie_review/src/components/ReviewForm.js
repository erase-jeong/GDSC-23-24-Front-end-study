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

    return (
    <form className="ReveiwForm">
        제목 : <input value={title} onChange={handleTitleChange}></input>
        평점 : <input type="number" value={rating} onChange={handleRatingChange}></input>
        내용 : <textarea value={content} onChange={handleContentChange}/>
    </form>
    
    );
}

export default ReviewForm;

