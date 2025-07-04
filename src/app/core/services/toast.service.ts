import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private snackBar = inject(MatSnackBar);

  show(message: string) {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
