import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursDirectivesComponent } from './behaviours-directives.component';

describe('BehavioursDirectivesComponent', () => {
  let component: BehavioursDirectivesComponent;
  let fixture: ComponentFixture<BehavioursDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehavioursDirectivesComponent]
    });
    fixture = TestBed.createComponent(BehavioursDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
