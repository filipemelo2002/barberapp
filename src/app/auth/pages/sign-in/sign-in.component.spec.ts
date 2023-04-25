import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { ComponentsModule } from '@components/components.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthorizeCustomerService } from '@auth/use-cases/authorize-customer.service';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      providers: [
        AuthorizeCustomerService
      ],
      imports: [ComponentsModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
