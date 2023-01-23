import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMainComentComponent } from './new-main-coment.component';

describe('NewMainComentComponent', () => {
  let component: NewMainComentComponent;
  let fixture: ComponentFixture<NewMainComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMainComentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMainComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
