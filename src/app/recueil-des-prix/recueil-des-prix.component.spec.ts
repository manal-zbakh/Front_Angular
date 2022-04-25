import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecueilDesPrixComponent } from './recueil-des-prix.component';

describe('RecueilDesPrixComponent', () => {
  let component: RecueilDesPrixComponent;
  let fixture: ComponentFixture<RecueilDesPrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecueilDesPrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecueilDesPrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
