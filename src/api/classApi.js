import api from `./axios`;

export const getClasses = async()=>{
return await api.get(`/classes`);
}

export const addClass = async()=>{
    return await api.post(`/classes`, newclass);
}

export const updateClass = async()=>{
    return await api.put(`/classes/${id}`,updatedclass);
}

export const deleteClass = async()=>{
    return await api.delete(`/classes/${id}`);
}