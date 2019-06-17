import { TestBed } from '@angular/core/testing';

import { WxMenuService } from './wx-menu.service';

describe('WxMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WxMenuService = TestBed.get(WxMenuService);
    expect(service).toBeTruthy();
  });
});
