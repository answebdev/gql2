import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      // console.log(data);
      // console.log(data.getAllUsers);
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {/* Display the first names
      commented out since we don't need this here in this app: */}
      {/* {users.map((item) => {
        return <h1 key={item.id}>{item.firstName}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;
