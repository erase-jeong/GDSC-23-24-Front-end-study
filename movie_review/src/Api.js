export async function getReviews(){
    const response=await fetch('https://learn.codeit.kr/8745/film-reviews/');
    const body=await response.json();
    return body;
}