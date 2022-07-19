import * as api from '../../../api/admin'

//add Designation

export const addDesignation = async (designationData) => {
    const { data } = await api.insertDesignation(designationData)
    return data;
};

//get all designations

export const getDesignations = async () => {
    const { data } = await api.viewDesignations();
    return data;
}

const addDesignationService  = {
    addDesignation, getDesignations,
}

export default addDesignationService