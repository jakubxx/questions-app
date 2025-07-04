import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the LogoComponent', () => {
    const fixture = TestBed.createComponent(LogoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});