import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicReaderComponent } from './music-reader.component';

describe('MusicReaderComponent', () => {
  let component: MusicReaderComponent;
  let fixture: ComponentFixture<MusicReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
