import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector(state=>state.user.userName);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="font-bold text-amber-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName ? (
        <Button type='primary' to="/menu">Go ahead and order, {userName}</Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
