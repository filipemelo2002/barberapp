import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from '@components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GetCustomerLocalstorageService } from './user-cases/get-customer-localstorage.service';
import { InfraModule } from '@infra/infra.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, ToolbarComponent ],
      imports: [ComponentsModule, RouterTestingModule, InfraModule],
      providers: [
        GetCustomerLocalstorageService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
