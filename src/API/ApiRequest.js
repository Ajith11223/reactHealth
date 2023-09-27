import { testApi } from "./API"



export const createFeasiblity =(data)=> testApi.post('/feasibility/createFeasibility',data)
export const getProjectBasedFeasiblity =(dataId)=> testApi.post("/feasibility/getFeasibility",dataId)

// genral Assumption
export const createGeneralAssumption =(data)=> testApi.post('/api/assumptionCreate',data)
export const getGeneralAssumption =(data)=> testApi.post('/api/assumption',data)
export const updateAssumptionData =(data,id)=> testApi.patch(`/api/editAssumption/${id}`,data)

