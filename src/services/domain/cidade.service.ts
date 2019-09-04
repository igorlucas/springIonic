import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { CidadeDTO } from "../../models/cidadeDTO";

@Injectable()
export class CidadeService {

    constructor(private http: HttpClient) {

    }

    findAll(estadoId: string): Observable<CidadeDTO[]> {
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estadoId}/cidades`);
    }
}