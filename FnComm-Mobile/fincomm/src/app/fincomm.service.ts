import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FincommService {

  constructor(private apiService:ApiService) { }
 
  public doTransaction(payload:any): Observable<any>{
    return this.apiService.post('posttransaction', payload);
  }
}