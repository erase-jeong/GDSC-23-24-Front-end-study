export async function getReviews({order='createAt', offset=0, limit=6}){
    const query=`order=${order}&offset=${offset}&limit=${limit}`;
    const response=await fetch(`https://learn.codeit.kr/1636/film-reviews?${query}`);

    if(!response.ok){
        throw new Error('리뷰를 불러오는데 실패했습니다');
    }
    
    const body=await response.json();
    return body
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