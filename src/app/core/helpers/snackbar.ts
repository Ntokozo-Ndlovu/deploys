import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const errorConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'g-snack-error',
};

export const successConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'g-snack-success',
};

export const notificationConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'g-snack-notification',
};
