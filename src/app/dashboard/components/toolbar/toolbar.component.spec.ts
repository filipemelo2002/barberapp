import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GetCustomerLocalstorageService } from '../../user-cases/get-customer-localstorage.service';
import { Customer } from 'src/entities/customer';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let getCustomerLocalStorage: jasmine.SpyObj<GetCustomerLocalstorageService>;
  let customer: Customer;

  beforeEach(async () => {
    getCustomerLocalStorage = jasmine.createSpyObj<GetCustomerLocalstorageService>('getCustomerLocalStorage', ['execute']);
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: GetCustomerLocalstorageService,
          useValue: getCustomerLocalStorage
        }
      ]
    })
    .compileComponents();

    customer = new Customer({
      name: 'test',
      email: 'test@test.com',
      phone: '819999999'
      }, 'whatever-id');

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sign out', () => {
    const spy = spyOn(window.localStorage, 'removeItem');
    const button = fixture.nativeElement.querySelector('button') as HTMLInputElement;
    button.click();
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  })

  it('should grab user info from service', () => {
    getCustomerLocalStorage.execute.and.returnValue({
      customer});

    component.ngOnInit();

    fixture.detectChanges();

    expect(component.name).toEqual(customer.name);

    const contentProfileContainer = fixture.nativeElement.querySelector('.header_content__profile') as HTMLDivElement;

    const anchor = contentProfileContainer.querySelector('a');

    expect(anchor?.innerText).toEqual(customer.name);
  })
});
