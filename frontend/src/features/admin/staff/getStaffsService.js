import * as api from '../../../api/admin'


//get all staff at admin side
export const fetchStaffs = async () => {
  const { data } = await api.viewStaffs()
  return data;  
};

// delete staff at admin side
export const deleteStaff = async (staffId) => {
  const { data } = await api.removeStaff(staffId);
  return data;
};

const getStaffsService = {
    fetchStaffs, deleteStaff,
}


export default getStaffsService