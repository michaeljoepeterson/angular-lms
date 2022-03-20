import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScormApi } from '../models/scorm-api';

@Injectable({
  providedIn: 'root'
})
export class ScormService {

  constructor(
    private http:HttpClient,
    private scormApi:ScormApi
  ) { 
    console.log('service',this.http,scormApi);
  }
}
