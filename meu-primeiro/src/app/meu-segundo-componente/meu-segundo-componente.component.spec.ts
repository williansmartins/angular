import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSegundoComponenteComponent } from './meu-segundo-componente.component';

describe('MeuSegundoComponenteComponent', () => {
  let component: MeuSegundoComponenteComponent;
  let fixture: ComponentFixture<MeuSegundoComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuSegundoComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSegundoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
