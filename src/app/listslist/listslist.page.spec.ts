import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListslistPage } from './listslist.page';

describe('ListslistPage', () => {
  let component: ListslistPage;
  let fixture: ComponentFixture<ListslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
