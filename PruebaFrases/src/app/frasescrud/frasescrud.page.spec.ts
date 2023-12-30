import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrasescrudPage } from './frasescrud.page';

describe('FrasescrudPage', () => {
  let component: FrasescrudPage;
  let fixture: ComponentFixture<FrasescrudPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FrasescrudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
