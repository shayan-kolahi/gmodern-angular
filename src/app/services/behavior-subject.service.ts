import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
  localStorage_token: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
}
