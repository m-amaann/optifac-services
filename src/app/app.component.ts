import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NzLayoutModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  template: `
    <nz-layout class="min-h-screen">
      <!-- Header -->
      <app-header></app-header>
      
      <!-- Main Content -->
      <nz-content class="pt-16 lg:pt-20">
        <app-home></app-home>
      </nz-content>
      
      <!-- Footer -->
      <app-footer></app-footer>
    </nz-layout>
  `,
  styles: [`
    .ant-layout {
      background: white;
    }
  `]
})
export class AppComponent {
  title = 'OPTIFAC Facilities Management Services';
}