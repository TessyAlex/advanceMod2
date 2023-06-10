import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

describe('AppComponent', () => {
  beforeEach(async () => {
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

  it(`should have as title 'testcases'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testcases');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testcases app is running!');
  });

  describe('ParentComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent, ChildComponent],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should pass data from parent to child', () => {
      const childComponent = fixture.debugElement.nativeElement.querySelector('app-child');
      expect(childComponent.textContent).toContain(component.message);
    });
  
    it('should receive notification from child', () => {
      const childComponent = fixture.debugElement.nativeElement.querySelector('app-child');
      const button = childComponent.querySelector('button');
      button.click();
      fixture.detectChanges();
      expect(component.notification).toBe('Hello from child!');
    });
  });
});
