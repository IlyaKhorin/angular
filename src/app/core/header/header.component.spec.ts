import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let user = new User(1,"Name","LastName")

  let authService = {
    getUser: jasmine.createSpy('getUser').and.returnValue(user),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{provide: AuthService,  useValue: authService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should get user', () => {
    fixture.detectChanges();
    expect(component.user).toBe(user);
  });

  it('should logoff', () => {
    fixture.detectChanges();
    component.logoff();
    expect(component.user).toBeNull();
  });
});
