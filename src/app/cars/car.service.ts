import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({ providedIn: 'root' })
export class CarService {
  private baseUrl = environment.apiUrl + '/cars';
  constructor(private http: HttpClient) {}

  getAll() { return this.http.get<Car[]>(this.baseUrl); }
  getById(id: string) { return this.http.get<Car>(`${this.baseUrl}/${id}`); }
  create(data: Car) { return this.http.post<Car>(this.baseUrl, data); }
  update(id: string, data: Car) { return this.http.put(`${this.baseUrl}/${id}`, data); }
  delete(id: string) { return this.http.delete(`${this.baseUrl}/${id}`); }
}
