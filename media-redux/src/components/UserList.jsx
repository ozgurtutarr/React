import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Button from './Button';
import Skeleton from './Skeleton';

function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (data.length === 0) {
    return <div>No users found.</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <>
      <div>
        <div className="flex flex-row justify-between m-3">
          <h1 className="text-2xl mb-3">Users</h1>
          <Button onClick={() => dispatch(addUser())}>+ Add User</Button>
        </div>

        {renderedUsers}
      </div>
    </>
  );
}

export default UsersList;
