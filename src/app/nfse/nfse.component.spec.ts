import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfseComponent } from './nfse.component';

describe('NfseComponent', () => {
  let component: NfseComponent;
  let fixture: ComponentFixture<NfseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NfseComponent]
    });
    fixture = TestBed.createComponent(NfseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
