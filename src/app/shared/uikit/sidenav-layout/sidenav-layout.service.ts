import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavLayoutService {
  private sidenav: MatSidenav | undefined;


  public setSidenav(sidenav: MatSidenav) {
      this.sidenav = sidenav;
  }

  public open() {
      return this.sidenav?.open();
  }


  public close() {
      return this.sidenav?.close();
  }

  public toggle(): void {
  this.sidenav?.toggle();
 }
}
