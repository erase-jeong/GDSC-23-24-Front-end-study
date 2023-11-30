import ReviewList from "./ReviewList";
import items from '../mock.json';

function App(){
    const sortedItems=items.sort((a,b)=>b.rating-a.rating);
    return (
        <ReviewList items={sortedItems}/>
    )
}

export default App;