import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnesListComponent } from './compagnes-list.component';

describe('CompagnesListComponent', () => {
  let component: CompagnesListComponent;
  let fixture: ComponentFixture<CompagnesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
