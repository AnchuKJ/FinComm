import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  //public baseUrl = "https://fincommapi.azurewebsites.net/";
  public baseUrl = "http://localhost:5029/";
  public imagebaseurl ="https://fincommstore.blob.core.windows.net/"
  public get(url: string): Observable<any> {   
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/json");
    const options = { headers: headers };
    return this.httpClient.get(this.baseUrl + url, options).pipe(      
    );
  }

  public post(url: string, payload: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set("Accept", "application/json");
    headers.set("Allow-Origin", "*");
    const options = { headers: headers };
    return this.httpClient.post(this.baseUrl + url, payload, options).pipe(
    );
  }

  public uploadFile(url: string, formData: any):Observable<any>{
    return this.httpClient.post(this.baseUrl + url, formData, {
      reportProgress: true
    });
  }

}