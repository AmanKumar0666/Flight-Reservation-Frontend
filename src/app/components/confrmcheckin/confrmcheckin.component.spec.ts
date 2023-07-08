import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrmcheckinComponent } from './confrmcheckin.component';

describe('ConfrmcheckinComponent', () => {
  let component: ConfrmcheckinComponent;
  let fixture: ComponentFixture<ConfrmcheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrmcheckinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfrmcheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
