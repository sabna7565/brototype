import * as api from '../../../../api/admin'

//add staff at admin side
export const registerStaff = async (staffData) => {
  const { data } = await api.addStaffs(staffData)
  console.log("staff register",data);
  return data;
  
};

const addStaffService = {
    registerStaff
}


export default addStaffService