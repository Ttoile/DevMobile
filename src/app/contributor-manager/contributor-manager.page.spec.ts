import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContributorManagerPage } from './contributor-manager.page';

describe('ContributorManagerPage', () => {
  let component: ContributorManagerPage;
  let fixture: ComponentFixture<ContributorManagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributorManagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContributorManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
