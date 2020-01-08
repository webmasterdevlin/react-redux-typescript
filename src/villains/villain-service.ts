import axios from "axios";
import {IVillainModel} from "./villain-types";

const api = axios.create({
    baseURL: 'http://localhost:5000/'
});

export async function getVillains() {
    return await api.get( 'villains');
}

export async function deleteVillain(id: string) {
    return await api.delete('villains/' + id );
}

export async function postVillain(newVillain: IVillainModel) {
    return await api.post('villains', newVillain);
}

export async function putVillain(updateVillain: IVillainModel) {
    return await api.put('villains', updateVillain);
}
