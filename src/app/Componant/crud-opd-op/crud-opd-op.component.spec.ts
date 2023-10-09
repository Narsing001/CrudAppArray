import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOpdOpComponent } from './crud-opd-op.component';

describe('CrudOpdOpComponent', () => {
  let component: CrudOpdOpComponent;
  let fixture: ComponentFixture<CrudOpdOpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudOpdOpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudOpdOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
