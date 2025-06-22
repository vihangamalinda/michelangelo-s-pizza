import { Link } from 'react-router-dom';

function Button({ children, isDisabled, to, type }) {
  const baseStyles =
    'inline-block rounded-full bg-amber-400 font-semibold uppercase text-stone-800 transition-colors duration-300 hover:bg-amber-300 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: baseStyles + ' px-4 py-3 md:px-6 md:py-4',
    small: baseStyles + ' px-4 text-xs py-2 md:px-5 md:py-5',
  };
  const className = styles[type];
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
