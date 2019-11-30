import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokepanelComponent } from './pokepanel.component';

describe('PokepanelComponent', () => {
  let component: PokepanelComponent;
  let fixture: ComponentFixture<PokepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
