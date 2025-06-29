import LinkButton from "../../ui/LinkButton";
function EmptyCart() {
  return (
    <div className='px-3 py-4'>
   <LinkButton
        to="/menu"
        className="text-sm text-blue-400 hover:font-bold hover:text-blue-600"
      >
            &larr; Back to menu
      </LinkButton>
      <p className="mt-7font-semibold text-xl f">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
