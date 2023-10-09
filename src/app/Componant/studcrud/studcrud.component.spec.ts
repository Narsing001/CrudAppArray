import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudcrudComponent } from './studcrud.component';

describe('StudcrudComponent', () => {
  let component: StudcrudComponent;
  let fixture: ComponentFixture<StudcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
