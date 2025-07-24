import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NavigationService } from '../../services/navigation.service';
import { COMPANY_DATA } from '../../data/company';
import { SERVICES_DATA } from '../../data/services';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        NzButtonModule,
        NzCardModule,
        NzGridModule,
        NzIconModule,
        NzStatisticModule
    ],
    template: `
    <!-- Hero Section with Beautiful Design -->
    <section id="home" class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div nz-row [nzGutter]="[32, 32]" nzAlign="middle">
          
          <!-- Hero Content -->
          <div nz-col [nzXs]="24" [nzLg]="12">
            <div class="space-y-8">
              <div class="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                <i nz-icon nzType="star" class="mr-2 text-yellow-400"></i>
                #1 Facilities Management in Dubai
              </div>
              
              <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
                Professional 
                <span class="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Facilities
                </span>
                <br>Management Services
              </h1>
              
              <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Comprehensive facility management solutions for Dubai's leading businesses. 
                Excellence in service delivery since 2010.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <button nz-button nzSize="large" 
                        class="bg-white text-blue-900 hover:bg-gray-100 border-white font-semibold px-8 py-3 h-auto shadow-lg"
                        (click)="scrollTo('services')">
                  <i nz-icon nzType="appstore" class="mr-2"></i>
                  Explore Services
                </button>
                <button nz-button nzGhost nzSize="large" 
                        class="text-white border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 h-auto"
                        (click)="scrollTo('contact')">
                  <i nz-icon nzType="phone" class="mr-2"></i>
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
          
          <!-- Hero Visual -->
          <div nz-col [nzXs]="24" [nzLg]="12">
            <div class="relative">
              <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 text-center transform hover:scale-105 transition-transform duration-500">
                <div class="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i nz-icon nzType="home" class="text-white text-4xl"></i>
                </div>
                <h3 class="text-2xl lg:text-3xl font-bold mb-3">{{ company.shortName }}</h3>
                <p class="text-blue-200 text-lg">Facilities Management Excellence</p>
                <div class="flex justify-center space-x-4 mt-6">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-yellow-400">500+</div>
                    <div class="text-sm text-blue-200">Happy Clients</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-yellow-400">15+</div>
                    <div class="text-sm text-blue-200">Years</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-yellow-400">24/7</div>
                    <div class="text-sm text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div nz-row [nzGutter]="[32, 32]" class="text-center">
          <div nz-col [nzXs]="12" [nzSm]="6" *ngFor="let stat of stats">
            <div class="group">
              <div class="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">
                {{ stat.value }}
              </div>
              <div class="text-blue-100 text-lg font-medium">{{ stat.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <i nz-icon nzType="info-circle" class="mr-2"></i>
            About Our Company
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">About {{ company.shortName }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading facilities management company in Dubai, providing comprehensive solutions for businesses across the UAE
          </p>
        </div>

        <div nz-row [nzGutter]="[48, 48]" nzAlign="middle">
          <div nz-col [nzXs]="24" [nzLg]="12">
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <i nz-icon nzType="target" class="text-blue-600 mr-3"></i>
                  Our Mission
                </h3>
                <p class="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional facility management services that enhance operational efficiency, 
                  ensure safety, and create comfortable environments for businesses in Dubai and across the UAE.
                </p>
              </div>
              
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i nz-icon nzType="crown" class="text-blue-600 mr-3"></i>
                  Why Choose Us
                </h3>
                <div class="space-y-4">
                  <div class="flex items-start space-x-4" *ngFor="let point of whyChooseUs">
                    <div class="bg-green-100 p-2 rounded-lg mt-1">
                      <i nz-icon nzType="check" class="text-green-600"></i>
                    </div>
                    <span class="text-gray-700 text-lg">{{ point }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div nz-col [nzXs]="24" [nzLg]="12">
            <div class="relative">
              <nz-card class="shadow-2xl border-0 overflow-hidden">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">
                  <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i nz-icon nzType="star" class="text-white text-3xl"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Excellence in Service</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Located in the heart of Dubai's Business Bay, we serve clients across the UAE with 
                    dedication to quality, reliability, and customer satisfaction.
                  </p>
                  <div class="flex justify-center space-x-6 mt-6">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-blue-600">ISO</div>
                      <div class="text-sm text-gray-500">Certified</div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-blue-600">100%</div>
                      <div class="text-sm text-gray-500">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </nz-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <i nz-icon nzType="appstore" class="mr-2"></i>
            Our Services
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive facility management solutions tailored for Dubai's business environment
          </p>
        </div>

        <div nz-row [nzGutter]="[24, 24]">
          <div nz-col [nzXs]="24" [nzSm]="12" [nzLg]="6" *ngFor="let service of services">
            <nz-card nzHoverable class="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div class="text-center p-6">
                <!-- Service Icon -->
                <div [ngClass]="getServiceIconClass(service.color)" 
                     class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <i nz-icon [nzType]="service.icon" class="text-white text-2xl"></i>
                </div>
                
                <!-- Service Info -->
                <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
                
                <!-- Service Features -->
                <div class="space-y-2 mb-6">
                  <div class="flex items-center text-sm text-gray-600" *ngFor="let feature of service.features">
                    <i nz-icon nzType="check-circle" class="text-green-500 mr-2"></i>
                    <span>{{ feature }}</span>
                  </div>
                </div>
                
                <!-- Service CTA -->
                <button nz-button nzType="link" 
                        class="text-blue-600 font-semibold p-0 group-hover:text-blue-800"
                        (click)="scrollTo('contact')">
                  Learn More
                  <i nz-icon nzType="arrow-right" class="ml-1 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </nz-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 bg-black/30"></div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Facilities?</h2>
          <p class="text-xl text-blue-100">
            Contact us today for a free consultation and customized service proposal
          </p>
        </div>
        
        <!-- Contact Cards -->
        <div nz-row [nzGutter]="[24, 24]" class="mb-12">
          <div nz-col [nzXs]="24" [nzMd]="8" *ngFor="let contact of contactInfo">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div [ngClass]="contact.bgClass" class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i nz-icon [nzType]="contact.icon" class="text-white text-2xl"></i>
              </div>
              <h3 class="text-lg font-semibold mb-2">{{ contact.title }}</h3>
              <p class="text-blue-200">{{ contact.text }}</p>
            </div>
          </div>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button nz-button nzType="default" nzSize="large"
                  class="bg-white text-blue-900 hover:bg-gray-100 border-white font-semibold px-8 py-3 h-auto shadow-lg">
            <i nz-icon nzType="phone" class="mr-2"></i>
            Call {{ company.phone }}
          </button>
          <button nz-button nzGhost nzSize="large"
                  class="text-white border-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 h-auto">
            <i nz-icon nzType="mail" class="mr-2"></i>
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    company = COMPANY_DATA;
    services = SERVICES_DATA;

    stats = [
        { title: 'Happy Clients', value: '500+' },
        { title: 'Projects Done', value: '1000+' },
        { title: 'Years Experience', value: '15+' },
        { title: 'Support', value: '24/7' }
    ];

    whyChooseUs = [
        'Over 15 years of experience in facilities management',
        'Certified and trained professional staff',
        '24/7 customer support and emergency response',
        'Customized solutions for every business need',
        'State-of-the-art equipment and technology'
    ];

    contactInfo = [
        {
            icon: 'phone',
            title: 'Call Us',
            text: this.company.phone,
            bgClass: 'bg-green-600'
        },
        {
            icon: 'mail',
            title: 'Email Us',
            text: this.company.email,
            bgClass: 'bg-blue-600'
        },
        {
            icon: 'environment',
            title: 'Visit Us',
            text: 'Business Bay, Dubai',
            bgClass: 'bg-purple-600'
        }
    ];

    constructor(private navigationService: NavigationService) { }

    scrollTo(sectionId: string): void {
        this.navigationService.scrollToSection(sectionId);
    }

    getServiceIconClass(color: string): string {
        const colorMap: { [key: string]: string } = {
            blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
            green: 'bg-gradient-to-br from-green-500 to-green-600',
            orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
            purple: 'bg-gradient-to-br from-purple-500 to-purple-600'
        };
        return colorMap[color] || 'bg-gradient-to-br from-blue-500 to-blue-600';
    }
}