import { Link } from 'react-router-dom';

function Button({ children, isDisabled, to }) {
  const className =
    'inline-block rounded-full bg-amber-400 px-4 py-3 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={isDisabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
