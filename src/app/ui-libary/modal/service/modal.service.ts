import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ModalService {
   display: BehaviorSubject<number> = 
                   new BehaviorSubject(0);

  watch(): Observable<number> {
    return this.display.asObservable();
  }

  open() {
    this.display.next(1);
  }

  close() {
    this.display.next(0);
  }
}
