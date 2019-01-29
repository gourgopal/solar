import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'share-menu',
  templateUrl: './share.component.html',
})
export class ShareMenu {
  constructor(public bottomSheetRef: MatBottomSheetRef<ShareMenu>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  path(): string {
    return location.href;
  }
}
