import * as api from '../../../api/admin'


//get all branchs
const getBranchs = async () => {
    const { data } = await api.viewBranchs();
    return data;
}

//get Branch based on locations

const getBranch = async (locname) => {
    const { data } = await api.viewBranch(locname)
    console.log("singlebranch",data);
    return data;
    
};

//add Branch

const giveBranch = async (branchData) => {
    const { data } = await api.insertBranch(branchData)
    return data;
};


const addBranchService  = {
    giveBranch, getBranchs, getBranch,
}

export default addBranchService