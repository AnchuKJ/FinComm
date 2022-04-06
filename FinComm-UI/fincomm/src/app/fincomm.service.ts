import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export class community {
  name:string;
  status: string;
  savings: number;
  loan:number;
  loanrequests:number;
  startdate:string;
  membercount:number;
  avatar:string;
}

@Injectable({
  providedIn: 'root'
})

export class FincommService {

  constructor(private apiService:ApiService) { }

  public createCommunity(payload:any): Observable<any>{
    return this.apiService.post('createcommunity', payload);
  }

  public getCommunities(): Observable<any>{
    return this.apiService.get('communities');
  }

  public createActivity(payload:any): Observable<any>{
    return this.apiService.post('createactivity', payload);
  }

  public getActivities(): Observable<any>{
    return this.apiService.get('activities');
  }

  public uploadCommunityPicture(payload:any):Observable<any>{
    return this.apiService.uploadFile('uploadPicture', payload);
  }

  public communityImageBaseUrl(){
    return this.apiService.imagebaseurl + 'communitylogos/';
  }

  public userImgeBaseUrl(){
    return this.apiService.imagebaseurl + 'users/';
  }
}
