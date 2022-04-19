
import axios from 'axios';

class AxiosDataAccessService{
    getAllEntities(uri){
        return axios.get("http://localhost:9090/api/v1/" + uri);
    }
    getEntityById(uri, id){
        return axios.get("http://localhost:9090/api/v1/" + uri + "/" + id);
    }
    addEntity(uri, entity){
        return axios.post("http://localhost:9090/api/v1/" + uri, entity);
    }
    updateEntity(uri, id, entity){
        return axios.put("http://localhost:9090/api/v1/" + uri + "/" + id, entity);
    }
    deleteEntity(uri, id){
        return axios.delete("http://localhost:9090/api/v1/" + uri + "/" + id);
    }
}

export default new AxiosDataAccessService()