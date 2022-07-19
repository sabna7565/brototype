import * as api from '../../../../api/admin'

//get single user at admin side
export const singleUser = async (userId) => {
  const { data } = await api.fetchUser(userId)
  console.log("single...",data);
  return data;
  
};

const singleUserService = {
    singleUser
}


export default singleUserService