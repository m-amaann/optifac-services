import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavigationService } from '../../services/navigation.service';
import { COMPANY_DATA } from '../../data/company';
import { NAV_ITEMS } from '../../data/navigation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NzLayoutModule, NzMenuModule, NzButtonModule, NzIconModule],
  template: `
    

    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 lg:h-20">
          
          <!-- Logo -->
          <div class="flex items-center cursor-pointer group" (click)="scrollTo('home')">
            <div class="w-10 h-10 lg:w-12 lg:h-12 mr-3 group-hover:scale-105 transition-transform">
              <img 
                src="/assets/Logo.png"
                [alt]="company.shortName + ' Logo'"
                class="w-full h-full object-contain rounded-xl"
                loading="eager">
            </div>
            <div class="hidden sm:block">
              <h1 class="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {{ company.shortName }}
              </h1>
              <p class="text-xs text-gray-500 -mt-1">Facilities Management</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a *ngFor="let item of navItems" 
               (click)="scrollTo(item.id)"
               class="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-50">
              <i nz-icon [nzType]="item.icon" class="text-lg"></i>
              <span>{{ item.label }}</span>
            </a>
          </nav>

          <!-- Desktop CTA -->
          <div class="hidden md:flex items-center space-x-4">
            <button nz-button nzType="default" nzSize="large" class="border-blue-600 text-blue-600 hover:bg-blue-50"
            (click)="scrollTo('contact')"
            >
              <i nz-icon nzType="phone" class="mr-2"></i>
              Call Us
            </button>
            
            <button nz-button nzType="primary" nzSize="large" 
                    class="bg-gradient-to-r from-blue-600 to-indigo-600 border-none shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                    (click)="scrollTo('contact')">
              <i nz-icon nzType="message" class="mr-2"></i>
              Get Quote
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button nz-button nzType="text" nzSize="large" 
                  class="md:hidden w-12 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100"
                  (click)="toggleMobileMenu()">
            <i nz-icon [nzType]="isMobileMenuOpen ? 'close' : 'menu'" class="text-2xl"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden transition-all duration-300 ease-in-out overflow-hidden"
             [class.max-h-0]="!isMobileMenuOpen"
             [class.max-h-96]="isMobileMenuOpen">
          <div class="py-4 space-y-2">
            <div *ngFor="let item of navItems" 
                 (click)="mobileMenuClick(item.id)"
                 class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
              <i nz-icon [nzType]="item.icon" class="text-blue-600 text-lg"></i>
              <span class="text-gray-700 font-medium">{{ item.label }}</span>
            </div>
            
            <div class="pt-4 space-y-3">
              <button nz-button nzType="default" nzBlock nzSize="large"
                      class="border-blue-600 text-blue-600"
                      (click)="mobileMenuClick('contact')">
                <i nz-icon nzType="phone" class="mr-2"></i>
                Call {{ company.phone }}
              </button>
              <button nz-button nzType="primary" nzBlock nzSize="large"
                      class="bg-gradient-to-r from-blue-600 to-indigo-600 border-none"
                      (click)="mobileMenuClick('contact')">
                <i nz-icon nzType="message" class="mr-2"></i>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  company = COMPANY_DATA;
  navItems = NAV_ITEMS;
  isMobileMenuOpen = false;

  constructor(private navigationService: NavigationService) { }

  scrollTo(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  mobileMenuClick(sectionId: string): void {
    this.scrollTo(sectionId);
    this.isMobileMenuOpen = false;
  }
}