import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';

describe('AppComponent', () => {
  let component:Test1Component;  // the object of the test1 component.

  beforeEach(async () => {
    component=new Test1Component(); //declare the same component in beforeEach
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
  });
  it('should add two numbers correctly', () => {
    const result = component.sum(2, 3);
    expect(result).toEqual(5);
  });

  it('should handle negative numbers correctly', () => {
    const result = component.sum(-2, 5);
    expect(result).toEqual(3);
  });

  it('should return the number when adding zero to a number', () => {
    const result = component.sum(10, 0);
    expect(result).toEqual(10);
  });
});
