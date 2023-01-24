import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyMainCommentComponent } from './reply-main-comment.component';

describe('ReplyMainCommentComponent', () => {
  let component: ReplyMainCommentComponent;
  let fixture: ComponentFixture<ReplyMainCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyMainCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplyMainCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
