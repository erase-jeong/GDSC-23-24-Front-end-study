
export async function getReviews(){
    const response=await fetch('https://learn.codeit.kr/0000/film-reviews/');
    const body=await response.json();
    return body;
}

/*
export async function getReviews() {
    try {
        const response = await fetch('https://learn.codeit.kr/2375/film-reviews/');
        const body = await response.json();
        console.log(body);
        return body;
    } catch (error) {
        console.error('리뷰를 가져오는 중 오류 발생:', error);
    }
}
*/