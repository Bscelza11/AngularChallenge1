import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authenticationService {
  private nameUser$ = new Subject<string>();

  constructor() {}

  sendName(name: string) {
    this.nameUser$.next(name);
  }

  getNameUser(): Observable<string> {
    return this.nameUser$.asObservable();
  }
}
