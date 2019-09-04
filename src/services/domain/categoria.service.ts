import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { Observable } from "rxjs/Rx";
import { categoriaDTO } from "../../models/categoriaDTO";

@Injectable()
export class CategoriaService {

    constructor(private http: HttpClient) {

    }

    findAll(): Observable<categoriaDTO[]> {
        return this.http.get<categoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}