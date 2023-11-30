import {useState} from 'react';

function ReviewForm(){
    const [title, setTitle]=useState('');

    const handleTitleChange=(e)=>{
        //input의 value가 변경될 때마다 그 값을 state에 반영
        //setTitle함수를 써서 타겟값 변경
        setTitle(e.target.value);
    }

    return (
    <form>
        <input value={title} onChange={handleTitleChange}></input>
    </form>
    
    );
}

export default ReviewForm;

/*html에서는 사용자가 input에 입력할 때마다 onInput이라는 데이터가발생했는데, 
onChange 이벤트는 사용자 입력이 끝났을 때 발생하는 이벤트 

리액트에서 onChange는 순수 자바스크립트에서의 onChange이벤트와 다르게 동작함.  
*/