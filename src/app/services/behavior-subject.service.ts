import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
  onChanged: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
}
