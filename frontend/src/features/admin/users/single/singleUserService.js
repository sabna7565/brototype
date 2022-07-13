import * as api from '../../../api/admin'


//get all users at admin side
export const singleUser = async () => {
  const { data } = await api.singleUser()
  console.log("single",data);
  return data;
  
};

const singleUserService = {
    singleUser
}


export default singleUserService