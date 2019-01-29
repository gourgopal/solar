import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppComponent } from './app.component';
import { BottomSheetMenu } from './BottomSheet/bottomsheet.component';
import { ShareMenu } from './BottomSheet/share.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LostComponent } from './lost/lost.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  imports: [ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })]
})
export class MaterialModule { }

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', data: { title: 'Home', description: 'Using solar energy can have a positive impact on the environment. Solar panels built in the 1990s are still producing power which is a very good investment.' } },
  { path: 'products', component: ProductsComponent, data: { title: 'Products', description: 'We have the best quality Solar products tested and with warranty.' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact', description: 'Contact us anytime for any Solar related queries or to buy any Solar Product' } },
  { path: 'books', component: BooksComponent, data: { title: 'Books', description: 'Books related to Solar Energy from Trusted Sellers in India' } },
  { path: 'lost', component: LostComponent, data: { title: '404', description: 'Page not found. You can browse our stuffs in our website' } },
  { path: '**', redirectTo: '/lost' }
]

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetMenu,
    ShareMenu,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    BooksComponent,
    LostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [BottomSheetMenu, ShareMenu],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
