// src/app/pages/services/services.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HeaderComponent } from '../../layout/header/Header';
import { FooterComponent } from '../../layout/footer/Footer';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';

import { SERVICES_DATA, SERVICE_AREAS } from '../../data/services';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        CardComponent,
        CardHeaderComponent,
        CardTitleComponent,
        CardContentComponent,
        BadgeComponent
    ],
    template: `
    <!-- Header -->
    <app-header [activeRoute]="'services'"></app-header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8" [@fadeInUp]="'animate'">
          <div class="text-center max-w-4xl mx-auto">
            <ui-badge variant="outline" size="lg" class="mb-6">
              🔧 Our Services
            </ui-badge>
            
            <h1 class="text-4xl md:text-6xl font-heading font-bold text-neutral-800 mb-6">
              Complete Facility 
              <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Management Solutions
              </span>
            </h1>
            
            <p class="text-xl text-neutral-600 leading-relaxed font-body mb-8">
              Professional services to keep your facilities clean, secure, and efficiently maintained across Dubai and UAE
            </p>

            <app-button [variant]="'primary'" [size]="'lg'" routerLink="/quote">
              Get Free Quote
            </app-button>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="py-20 lg:py-32 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ui-card 
              *ngFor="let service of services; let i = index"
              variant="elevated"
              padding="lg"
              class="group cursor-pointer hover:scale-105 transition-all duration-300"
              [@cardAnimation]="'animate'"
              [style.animation-delay]="i * 0.1 + 's'"
              (click)="selectService(service)">
              
              <!-- Service Icon -->
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div class="w-8 h-8 bg-white rounded opacity-90"></div>
              </div>
              
              <ui-card-header>
                <ui-card-title>{{ service.title }}</ui-card-title>
                <ui-badge [variant]="getServiceBadgeVariant(service.color)" size="sm" class="w-fit">
                  {{ service.pricing }}
                </ui-badge>
              </ui-card-header>
              
              <ui-card-content>
                <p class="text-neutral-600 leading-relaxed font-body mb-6">
                  {{ service.description }}
                </p>

                <!-- Key Features -->
                <div class="mb-6">
                  <h4 class="font-heading font-semibold text-neutral-800 mb-3">Key Features:</h4>
                  <ul class="space-y-2">
                    <li *ngFor="let feature of service.features.slice(0, 4)" 
                        class="text-sm text-neutral-600 font-body flex items-center">
                      <svg class="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <!-- Service Highlights -->
                <div class="mb-6">
                  <h4 class="font-heading font-semibold text-neutral-800 mb-3">Highlights:</h4>
                  <div class="flex flex-wrap gap-2">
                    <ui-badge *ngFor="let highlight of service.highlights.slice(0, 2)" 
                              variant="outline" 
                              size="sm">
                      {{ highlight }}
                    </ui-badge>
                  </div>
                </div>

                <!-- Action -->
                <div class="flex items-center justify-between">
                  <div class="text-sm text-neutral-500 font-body">
                    {{ service.duration }}
                  </div>
                  <svg class="w-5 h-5 text-primary-500 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </ui-card-content>
            </ui-card>
          </div>
        </div>
      </section>

      <!-- Service Areas -->
      <section class="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16" [@fadeInUp]="'animate'">
            <ui-badge variant="outline" size="lg" class="mb-4">
              📍 Service Coverage
            </ui-badge>
            <h2 class="text-3xl lg:text-4xl font-heading font-bold text-neutral-800 mb-6">
              Serving Across Dubai & UAE
            </h2>
            <p class="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              We provide comprehensive facility management services across key business districts and residential areas
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div *ngFor="let area of serviceAreas; let i = index"
                 class="bg-white border-2 border-gray-100 rounded-lg p-4 text-center hover:border-primary-300 hover:shadow-lg transition-all duration-200 group"
                 [@areaAnimation]="'animate'"
                 [style.animation-delay]="i * 0.05 + 's'">
              <div class="text-sm font-body font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                {{ area }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" [@fadeInUp]="'animate'">
          <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-body">
            We can customize our services to meet your specific facility management needs
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <app-button [variant]="'secondary'" [size]="'lg'" class="bg-white text-primary-600 hover:bg-gray-100" routerLink="/quote">
              Request Quote
            </app-button>
            <app-button [variant]="'outline'" [size]="'lg'" class="border-white text-white hover:bg-white hover:text-primary-600" routerLink="/contact">
              Contact Us
            </app-button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
    animations: [
        trigger('fadeInUp', [
            state('animate', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('* => animate', [
                style({ opacity: 0, transform: 'translateY(40px)' }),
                animate('600ms ease-out')
            ])
        ]),

        trigger('cardAnimation', [
            state('animate', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('* => animate', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                animate('600ms ease-out')
            ])
        ]),

        trigger('areaAnimation', [
            state('animate', style({ opacity: 1, transform: 'scale(1)' })),
            transition('* => animate', [
                style({ opacity: 0, transform: 'scale(0.9)' }),
                animate('400ms ease-out')
            ])
        ])
    ]
})
export class ServicesComponent implements OnInit {
    services = SERVICES_DATA;
    serviceAreas = SERVICE_AREAS;

    ngOnInit() {
        console.log('OPTIFAC Services Page Loaded');
    }

    selectService(service: any) {
        console.log('Selected service:', service.id);
        // Navigate to service detail or show modal
    }

    getServiceBadgeVariant(color: string): 'default' | 'secondary' | 'success' | 'warning' {
        const colorMap: Record<string, 'default' | 'secondary' | 'success' | 'warning'> = {
            'blue': 'default',
            'green': 'success',
            'orange': 'warning',
            'purple': 'secondary',
            'emerald': 'success',
            'amber': 'warning'
        };
        return colorMap[color] || 'default';
    }
}