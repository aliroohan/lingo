import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLingoComponent } from './find-lingo.component';

describe('FindLingoComponent', () => {
  let component: FindLingoComponent;
  let fixture: ComponentFixture<FindLingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindLingoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindLingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
