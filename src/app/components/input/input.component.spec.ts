import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let input: HTMLInputElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have type e-mail', () => {
    component.type = 'email';
    fixture.detectChanges();
    expect(input.getAttribute('type')).toEqual('email');
  });

  it('should render placeholder', () => {
    component.placeholder = 'E-Mail';
    fixture.detectChanges();
    expect(input.getAttribute('placeholder')).toEqual('E-Mail');
  });

  it('should render value',  fakeAsync(() => {
    component.value = 'filipe@test.com';
    fixture.detectChanges();
    tick();
    input = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual('filipe@test.com');
  }));

  it('should emit onChange event', () => {
    component.valueChange = jasmine.createSpyObj<EventEmitter<string>>(
      'valueChange',
      ['emit']
    );
    input.value = 'testing@email.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.valueChange.emit).toHaveBeenCalled();
    expect(component.valueChange.emit).toHaveBeenCalledWith('testing@email.com');
  });

  it('should add class if error is true', () => {
    component.error = true;
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.error') as HTMLDivElement;
    expect(container).toBeTruthy();
  });
});
