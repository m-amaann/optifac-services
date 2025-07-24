import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { COMPANY_DATA } from '../../data/company';
import { SERVICES_DATA } from '../../data/services';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <!-- Modern Horizontal Footer with Pure Tailwind CSS -->
    <footer class="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      
      <!-- CTA Section -->
      <div class="bg-gradient-to-r from-primary-500 to-primary-600 mx-4 sm:mx-6 lg:mx-8 mb-8 rounded-2xl p-6 lg:p-8 text-center">
        <h3 class="text-xl lg:text-2xl font-bold mb-2">Ready to Get Started?</h3>
        <p class="text-primary-100 mb-4 lg:mb-6 text-sm lg:text-base">Contact us today for a free consultation</p>
        <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
          <button 
            (click)="scrollTo('contact')"
            class="bg-white text-primary-600 hover:bg-gray-100 border border-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            Call Now
          </button>
          <button 
            (click)="scrollTo('contact')"
            class="bg-transparent text-white border border-white hover:bg-white hover:text-primary-600 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            Get Quote
          </button>
        </div>
      </div>

      <!-- Main Footer Content - Force Horizontal Layout on Web -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 lg:gap-8">
          
          <!-- Company Info -->
          <div class="col-span-1 sm:col-span-1">
            <div class="space-y-4 lg:space-y-6">
              <!-- Logo -->
              <div class="flex items-center">
                <div class="w-10 h-10 lg:w-12 lg:h-12 mr-3 lg:mr-4">
                  <img 
                    src="/assets/Logo.png" 
                    [alt]="company.shortName + ' Logo'"
                    class="w-full h-full object-contain rounded-lg">
                </div>
                <div>
                  <h3 class="text-lg lg:text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">{{ company.shortName }}</h3>
                  <p class="text-xs lg:text-sm text-neutral-400">Facilities Management</p>
                </div>
              </div>
              
              <!-- Description -->
              <p class="text-sm lg:text-base text-neutral-300 leading-relaxed">
                Professional facilities management services for Dubai's leading businesses. 
                Excellence in service delivery since 2010.
              </p>
              
              <!-- Social Links -->
              <div class="flex space-x-3">
                <button class="w-9 h-9 lg:w-10 lg:h-10 bg-neutral-700 hover:bg-primary-600 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                  <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button class="w-9 h-9 lg:w-10 lg:h-10 bg-neutral-700 hover:bg-primary-600 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                  <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button class="w-9 h-9 lg:w-10 lg:h-10 bg-neutral-700 hover:bg-primary-600 text-neutral-300 hover:text-white rounded-lg transition-all duration-300 flex items-center justify-center">
                  <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-span-1 sm:col-span-1">
            <h3 class="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">Quick Links</h3>
            <div class="space-y-2 lg:space-y-3">
              <a (click)="scrollTo('home')" class="block text-sm lg:text-base text-neutral-300 hover:text-primary-400 cursor-pointer transition-colors flex items-center group">
                <svg class="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                Home
              </a>
              <a (click)="scrollTo('about')" class="block text-sm lg:text-base text-neutral-300 hover:text-primary-400 cursor-pointer transition-colors flex items-center group">
                <svg class="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                About Us
              </a>
              <a (click)="scrollTo('services')" class="block text-sm lg:text-base text-neutral-300 hover:text-primary-400 cursor-pointer transition-colors flex items-center group">
                <svg class="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                Our Services
              </a>
              <a (click)="scrollTo('contact')" class="block text-sm lg:text-base text-neutral-300 hover:text-primary-400 cursor-pointer transition-colors flex items-center group">
                <svg class="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                Contact
              </a>
            </div>
          </div>

          <!-- Services -->
          <div class="col-span-1 sm:col-span-1">
            <h3 class="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">Our Services</h3>
            <div class="space-y-2 lg:space-y-3">
              <div *ngFor="let service of services.slice(0, 4)" 
                   (click)="scrollTo('services')"
                   class="flex items-center text-sm lg:text-base text-neutral-300 hover:text-primary-400 cursor-pointer transition-colors group">
                <div class="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-primary-500 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <!-- Generic service icon -->
                  <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="truncate">{{ service.title }}</span>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-span-1 sm:col-span-1">
            <h3 class="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-white">Contact Info</h3>
            <div class="space-y-3 lg:space-y-4">
              
              <!-- Address -->
              <div class="flex items-start space-x-3">
                <div class="bg-primary-600 p-1.5 lg:p-2 rounded-lg mt-1 flex-shrink-0">
                  <svg class="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="font-medium text-sm lg:text-base text-white">Address</p>
                  <p class="text-xs lg:text-sm text-neutral-300 break-words">{{ company.address }}</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-3">
                <div class="bg-green-600 p-1.5 lg:p-2 rounded-lg flex-shrink-0">
                  <svg class="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="font-medium text-sm lg:text-base text-white">Phone</p>
                  <a href="tel:{{ company.phone }}" class="text-xs lg:text-sm text-neutral-300 hover:text-green-400 transition-colors break-all">
                    {{ company.phone }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-3">
                <div class="bg-purple-600 p-1.5 lg:p-2 rounded-lg flex-shrink-0">
                  <svg class="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="font-medium text-sm lg:text-base text-white">Email</p>
                  <a href="mailto:{{ company.email }}" class="text-xs lg:text-sm text-neutral-300 hover:text-purple-400 transition-colors break-all">
                    {{ company.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-neutral-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p class="text-neutral-400 text-xs lg:text-sm text-center md:text-left">
              © {{ currentYear }} {{ company.name }}. All rights reserved.
            </p>
            <div class="flex space-x-4 lg:space-x-6">
              <a href="#" class="text-neutral-400 hover:text-primary-400 text-xs lg:text-sm transition-colors">Privacy Policy</a>
              <a href="#" class="text-neutral-400 hover:text-primary-400 text-xs lg:text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    company = COMPANY_DATA;
    services = SERVICES_DATA;
    currentYear = new Date().getFullYear();

    constructor(private navigationService: NavigationService) { }

    scrollTo(sectionId: string): void {
        this.navigationService.scrollToSection(sectionId);
    }
}
animate__flash