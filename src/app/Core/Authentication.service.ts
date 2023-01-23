import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authenticationService {
  private nameUser$ = new BehaviorSubject<string>('');

  constructor() {}

  sendName(name: string) {
    this.nameUser$.next(name);
  }

  getNameUser(): Observable<string> {
    return this.nameUser$.asObservable();
  }
}
