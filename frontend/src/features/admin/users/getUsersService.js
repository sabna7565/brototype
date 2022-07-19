import * as api from '../../../api/admin'


//get all users at admin side
export const fetchUsers = async () => {
  const { data } = await api.fetchUsers()
  return data;
  
};

// delete user at admin side
export const deleteUser = async (userId) => {
  const { data } = await api.removeUser(userId);
  return data;
};

const getUsersService = {
    fetchUsers, deleteUser,
}


export default getUsersService