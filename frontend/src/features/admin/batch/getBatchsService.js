import * as api from '../../../api/admin'


//get all batchs at admin side
export const fetchBatchs = async () => {
  const { data } = await api.viewBatchs()
  return data;  
};

//add batch at admin side
export const insertBatch = async (batchData) => {
    const { data } = await api.addBatchs(batchData)
    console.log("batch insertion",data);
    return data;
    
  };

const getBatchsService = {
    fetchBatchs, insertBatch,
}


export default getBatchsService