import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxMenuComponent } from './wx-menu.component';

describe('WxMenuComponent', () => {
  let component: WxMenuComponent;
  let fixture: ComponentFixture<WxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
