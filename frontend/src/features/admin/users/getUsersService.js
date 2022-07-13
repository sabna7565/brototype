import * as api from '../../../api/admin'


//get all users at admin side
export const fetchUsers = async () => {
  const { data } = await api.fetchUsers()
  return data;
  
};

const getUsersService = {
    fetchUsers
}


export default getUsersService