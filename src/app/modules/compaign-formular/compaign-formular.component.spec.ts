import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaignFormularComponent } from './compaign-formular.component';

describe('CompaignFormularComponent', () => {
  let component: CompaignFormularComponent;
  let fixture: ComponentFixture<CompaignFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaignFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaignFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
