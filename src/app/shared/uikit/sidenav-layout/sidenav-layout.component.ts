import { SidenavLayoutService } from './sidenav-layout.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { nav } from 'src/app/app-nav';

@Component({
  selector: 'dash-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent {
  mobileQuery: MediaQueryList

  fillerNav : any = []

  @ViewChild('snav') snav!: MatSidenav;

  private _mobileQueryListener: () => void
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenav: SidenavLayoutService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('changes', this._mobileQueryListener)
  }

  ngOnInit() {
    this.fillerNav = nav

  }
  ngAfterViewInit(): void {
    this.sidenav.setSidenav(this.snav)
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }

}
