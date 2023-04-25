import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { EventEmitter } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let button: HTMLButtonElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click event', () => {
    component.onClick = jasmine.createSpyObj<EventEmitter<Event>>('onClick', ['emit']);
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalled();
  })

  it('should render initial type', () => {
    component.type = 'submit';
    fixture.detectChanges();
    expect(button.getAttribute('type')).toEqual('submit')
  })
});
