import { Link } from 'react-router-dom';

function Button({ children, isDisabled, to, type, onClick }) {
  const baseStyles =
    'inline-block text-sm rounded-full bg-amber-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: baseStyles + ' px-4 py-3 md:px-6 md:py-4',
    round: baseStyles + ' px-2.5 py-1 md:px3.5 md:py-2 text-sm',
    small: baseStyles + ' px-4 text-xs py-2 md:px-5 md:py-5',
    secondary:
      'tracking-wide text-sm inline-block px-4 py-2.5 md:px-6 md:py-3.5 rounded-full border-2 border-stone-200 font-semibold uppercase text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed focus:text-stone-800 ',
  };
  const className = styles[type];
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button disabled={isDisabled} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={isDisabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
