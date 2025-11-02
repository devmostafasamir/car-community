import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Car } from "./car";

@Injectable({ providedIn: 'root' })
export class CarService {
  private baseUrl = environment.apiUrl + '/cars';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> { return this.http.get<Car[]>(this.baseUrl); }
  getById(id: string): Observable<Car> { return this.http.get<Car>(`${this.baseUrl}/${id}`); }
  create(data: Car): Observable<Car> { return this.http.post<Car>(this.baseUrl, data); }
  update(id: string, data: Car): Observable<Car> { return this.http.put<Car>(`${this.baseUrl}/${id}`, data); }
  delete(id: string): Observable<void> { return this.http.delete<void>(`${this.baseUrl}/${id}`); }
}
