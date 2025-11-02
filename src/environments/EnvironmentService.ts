import { Injectable } from "@angular/core";
import { environment } from "./environment";

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  get apiUrl(): string {
    return environment.apiUrl;
  }
}
