import { useDispatch } from 'react-redux';
import Button from '../../ui/Button'
import { increaseItemQuantity,decreaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({pizzaId,currentItemQuantity}){
    const dispatch =useDispatch();
    return (
        <div className='flex gap-2 items-center md:gap-4'>
            <Button type="round" onClick={(e)=>dispatch(decreaseItemQuantity(pizzaId))} >-</Button> 
            <span>{currentItemQuantity}</span>
            <Button type='round' onClick={(e)=>dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )

}
export default UpdateItemQuantity;