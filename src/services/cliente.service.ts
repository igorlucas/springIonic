import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../models/clienteDTO";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from "./storage.service";

@Injectable()
export class ClienteService {

    constructor(private http: HttpClient, private storage: StorageService) {

    }

    findByEmail(email): Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: string): Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, { responseType: 'blob' });
    }
}