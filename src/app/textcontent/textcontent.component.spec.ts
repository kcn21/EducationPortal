import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcontentComponent } from './textcontent.component';

describe('TextcontentComponent', () => {
  let component: TextcontentComponent;
  let fixture: ComponentFixture<TextcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
