import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ComponentsModule } from '@components/components.module';
import { CreateCustomerService } from '@auth/use-cases/create-customer.service';
import { InfraModule } from '@infra/infra.module';
import { of } from 'rxjs';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let createCustomerService: jasmine.SpyObj<CreateCustomerService>;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    createCustomerService = jasmine.createSpyObj<CreateCustomerService>('createCustomerService', {
      'execute': of()
    });
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [ComponentsModule, InfraModule],
      providers: [
        {
          provide: CreateCustomerService,
          useValue:createCustomerService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the signIn method', () => {
    component.name.value = 'Test';
    component.email.value = 'test@email.com';
    component.password.value = 'test@98749';
    component.phone.value = '+55899999999';
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();
    expect(createCustomerService.execute).toHaveBeenCalled();
  })
});
