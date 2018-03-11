import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextwrapComponent } from './textwrap.component';

describe('TextwrapComponent', () => {
  let component: TextwrapComponent;
  let fixture: ComponentFixture<TextwrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextwrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
