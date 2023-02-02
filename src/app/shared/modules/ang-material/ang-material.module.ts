import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
const materialModules = [
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDialogModule,
];

@NgModule({
    imports: [
        ...materialModules
    ],
    exports: [
        ...materialModules
    ]
})
export class AngMaterialModule { }
