import { TestBed } from '@angular/core/testing';

import { SidenavLayoutService } from './sidenav-layout.service';

describe('SidenavLayoutService', () => {
  let service: SidenavLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidenavLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
