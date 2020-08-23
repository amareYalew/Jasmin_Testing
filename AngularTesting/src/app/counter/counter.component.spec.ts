import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core' 
import { CounterComponent } from './counter.component';
import {By} from '@angular/platform-browser'

describe('CounterComponent', () => {
 
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>; // It is the reference to our component in the DOM 
                                                   // IT Allows change detect with our test
                                                   // we can also acces like element the component instance
  let debugElement: DebugElement //
  let htmlElement: HTMLElement
  

   beforeEach(async(() => {
    TestBed.configureTestingModule({ // It is provide as module
      declarations: [ CounterComponent ] // 
    })
    .compileComponents();
   }));
  
  
    beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);// it give us testing version component 
    component = fixture.componentInstance;// we can get component from fixture // we can access our component by component.increment or decrement
    fixture.detectChanges(); // it is initialized counter from Testing DOM
    debugElement = fixture.debugElement.query(By.css('p')) // geting P from dom
    htmlElement = debugElement.nativeElement; // we can get native element 
   
    });
  
  it('should display the current number of the counter', () => {
     // Assert that the text on screen is Number:1
    expect(htmlElement.textContent).toEqual('Number:1')
  })


  it('should increment the current number by one', () => {
    // Arrange 
    const initialValue = component.counter;
    //Act
    component.increment();
    const newValue = component.counter;

    expect(newValue).toBeGreaterThan(initialValue);
  })
  it('should decrement the current number by one', () => {
    // Arrange 
    const initialValue = component.counter;
    //Act
    component.decrement();
    const newValue = component.counter;

    expect(newValue).toBeLessThan(initialValue);
  })
  it('should display the counter number on screen,after being incremented by one', () => {
    component.increment();
    fixture.detectChanges()
    expect(htmlElement.textContent).toEqual('Number:2');
  })
  it('should display the counter number on screen,after being decremented by one', () => {
    component.decrement();
    fixture.detectChanges()
    expect(htmlElement.textContent).toEqual('Number:0');
  })
});

// describe('CounterComponent', () => {
//   let component: CounterComponent;
//   let fixture: ComponentFixture<CounterComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CounterComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CounterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
