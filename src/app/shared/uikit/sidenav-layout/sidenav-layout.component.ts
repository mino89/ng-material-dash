import { SidenavLayoutService } from './sidenav-layout.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'dash-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss']
})
export class SidenavLayoutComponent {
  mobileQuery: MediaQueryList
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`)
  @ViewChild('snav') snav!: MatSidenav ;
  private _mobileQueryListener: () => void
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenav: SidenavLayoutService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addEventListener('changes', this._mobileQueryListener)
  }

  ngAfterViewInit(): void {
    this.sidenav.setSidenav(this.snav)
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change',this._mobileQueryListener)
  }

}
