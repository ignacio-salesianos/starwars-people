import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleItem } from './people-item';

describe('PeopleItem', () => {
  let component: PeopleItem;
  let fixture: ComponentFixture<PeopleItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleItem],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
