import { useDispatch } from 'react-redux'
import './RemoveFromShelf.css'
import { thunkRemoveShelfItem } from '../../store/bookshelf_items';
const RemoveFromShelves = ({shelfId, bookId}) => {
    console.log('IDS DISPLAYED HERE', shelfId, bookId)
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(thunkRemoveShelfItem(shelfId, bookId))
        window.location.reload()
    }
    return (
        <button onClick={handleClick}>Remove from shelf</button>
    )
}

export default RemoveFromShelves;
