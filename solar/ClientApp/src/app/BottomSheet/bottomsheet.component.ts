import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { Component } from '@angular/core';
@Component({
  selector: 'bottom-sheet-menu',
  templateUrl: './bottomsheet.component.html',
})
export class BottomSheetMenu {
  constructor(public bottomSheetRef: MatBottomSheetRef<BottomSheetMenu>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
