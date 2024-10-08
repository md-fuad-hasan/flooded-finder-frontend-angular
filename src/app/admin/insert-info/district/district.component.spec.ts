import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictComponent } from './district.component';

describe('DistrictComponent', () => {
  let component: DistrictComponent;
  let fixture: ComponentFixture<DistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
