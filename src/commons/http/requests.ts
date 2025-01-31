import axios from "axios";
import { RequestMethods } from "../interfaces/request-methods.interface"

export class RestClient implements RequestMethods{
    public async get(url: string, pagination: any) {
        const response = await axios.get(`${url}${new URLSearchParams(pagination)}`);
        return response?.data;
    };
}
