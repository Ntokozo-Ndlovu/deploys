import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NotificationDropdownComponent } from './components/notification-dropdown/notification-dropdown.component';

@NgModule({
    declarations: [HomeComponent, NotificationDropdownComponent],
    imports: [CommonModule, HomeRoutingModule, AngularMaterialModule],
    exports: [NotificationDropdownComponent],
})
export class HomeModule {}
