import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HeaderComponent } from '../../layout/header/Header';
import { FooterComponent } from '../../layout/footer/Footer';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardContentComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { InputComponent } from '../../components/ui/input/input.component';
import { TextareaComponent } from '../../components/ui/textarea/textarea.component';
import { AlertComponent } from '../../components/ui/alert/alert.component';

import { COMPANY_DATA } from '../../data/company';
import { SERVICES_DATA } from '../../data/services';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        HeaderComponent,
        FooterComponent,
        ButtonComponent,
        CardComponent,
        CardHeaderComponent,
        CardTitleComponent,
        CardContentComponent,
        BadgeComponent,
        InputComponent,
        TextareaComponent,
        AlertComponent
    ],
    template: `
    <!-- Header -->
    <app-header [activeRoute]="'contact'"></app-header>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8" [@fadeInUp]="'animate'">
          <div class="text-center max-w-4xl mx-auto">
            <ui-badge variant="outline" size="lg" class="mb-6">
              📞 Contact Us
            </ui-badge>
            
            <h1 class="text-4xl md:text-5xl font-heading font-bold text-neutral-800 mb-6">
              Get in Touch with 
              <span class="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                OPTIFAC
              </span>
            </h1>
            
            <p class="text-xl text-neutral-600 leading-relaxed font-body">
              Ready to transform your facility management? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <!-- Contact Form -->
            <div [@cardAnimation]="'animate'">
              <ui-card variant="elevated" padding="lg">
                <ui-card-header>
                  <ui-card-title>Send us a Message</ui-card-title>
                  <p class="text-neutral-600 font-body">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </ui-card-header>
                
                <ui-card-content>
                  <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                    
                    <!-- Success/Error Alerts -->
                    <ui-alert *ngIf="showSuccess" variant="success">
                      <strong>Message sent successfully!</strong> We'll get back to you within 24 hours.
                    </ui-alert>
                    
                    <ui-alert *ngIf="showError" variant="error">
                      <strong>Error sending message.</strong> Please try again or call us directly.
                    </ui-alert>

                    <!-- Name -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <ui-input
                        formControlName="name"
                        placeholder="Enter your full name"
                        [hasError]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                        [errorMessage]="getFieldError('name')">
                      </ui-input>
                    </div>

                    <!-- Email -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <ui-input
                        type="email"
                        formControlName="email"
                        placeholder="Enter your email address"
                        [hasError]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                        [errorMessage]="getFieldError('email')">
                      </ui-input>
                    </div>

                    <!-- Phone -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Phone Number *
                      </label>
                      <ui-input
                        type="tel"
                        formControlName="phone"
                        placeholder="+971 XX XXX XXXX"
                        [hasError]="contactForm.get('phone')?.invalid && contactForm.get('phone')?.touched"
                        [errorMessage]="getFieldError('phone')">
                      </ui-input>
                    </div>

                    <!-- Company -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Company Name
                      </label>
                      <ui-input
                        formControlName="company"
                        placeholder="Enter your company name (optional)">
                      </ui-input>
                    </div>

                    <!-- Service Type -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Service Interested In *
                      </label>
                      <select formControlName="serviceType" 
                              class="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 font-body">
                        <option value="">Select a service</option>
                        <option *ngFor="let service of services" [value]="service.id">
                          {{ service.title }}
                        </option>
                        <option value="multiple">Multiple Services</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <!-- Message -->
                    <div>
                      <label class="block text-sm font-body font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <ui-textarea
                        formControlName="message"
                        placeholder="Tell us about your facility management needs..."
                        [rows]="5"
                        [hasError]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                        [errorMessage]="getFieldError('message')">
                      </ui-textarea>
                    </div>

                    <!-- Submit Button -->
                    <app-button 
                      [variant]="'primary'" 
                      [size]="'lg'" 
                      type="submit"
                      [disabled]="contactForm.invalid || isSubmitting"
                      class="w-full">
                      <span *ngIf="!isSubmitting">Send Message</span>
                      <span *ngIf="isSubmitting" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    </app-button>
                  </form>
                </ui-card-content>
              </ui-card>
            </div>

            <!-- Contact Information -->
            <div class="space-y-8" [@cardAnimation]="'animate'">
              
              <!-- Contact Details -->
              <ui-card variant="elevated" padding="lg">
                <ui-card-header>
                  <ui-card-title>Contact Information</ui-card-title>
                </ui-card-header>
                <ui-card-content>
                  <div class="space-y-6">
                    
                    <!-- Phone -->
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-heading font-semibold text-neutral-800">Phone</h3>
                        <p class="text-neutral-600 font-body">{{ companyData.phone }}</p>
                        <p class="text-sm text-neutral-500 font-body">24/7 Emergency Service</p>
                      </div>
                    </div>

                    <!-- Email -->
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-heading font-semibold text-neutral-800">Email</h3>
                        <p class="text-neutral-600 font-body">{{ companyData.email }}</p>
                        <p class="text-sm text-neutral-500 font-body">Response within 24 hours</p>
                      </div>
                    </div>

                    <!-- Address -->
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 class="font-heading font-semibold text-neutral-800">Office Address</h3>
                        <p class="text-neutral-600 font-body">{{ companyData.address }}</p>
                        <p class="text-sm text-neutral-500 font-body">P.O.Box: {{ companyData.poBox }}</p>
                      </div>
                    </div>

                  </div>
                </ui-card-content>
              </ui-card>

              <!-- Business Hours -->
              <ui-card variant="elevated" padding="lg">
                <ui-card-header>
                  <ui-card-title>Business Hours</ui-card-title>
                </ui-card-header>
                <ui-card-content>
                  <div class="space-y-3">
                    <div class="flex justify-between">
                      <span class="font-body text-neutral-600">Monday - Friday</span>
                      <span class="font-body font-medium text-neutral-800">{{ companyData.workingHours.weekdays }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="font-body text-neutral-600">Saturday</span>
                      <span class="font-body font-medium text-neutral-800">{{ companyData.workingHours.saturday }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="font-body text-neutral-600">Sunday</span>
                      <span class="font-body font-medium text-neutral-800">{{ companyData.workingHours.sunday }}</span>
                    </div>
                    <div class="border-t pt-3 mt-3">
                      <div class="flex items-center space-x-2">
                        <ui-badge variant="destructive" size="sm">Emergency</ui-badge>
                        <span class="font-body text-sm text-neutral-600">{{ companyData.workingHours.emergency }}</span>
                      </div>
                    </div>
                  </div>
                </ui-card-content>
              </ui-card>

              <!-- Quick Actions -->
              <ui-card variant="elevated" padding="lg">
                <ui-card-header>
                  <ui-card-title>Quick Actions</ui-card-title>
                </ui-card-header>
                <ui-card-content>
                  <div class="space-y-4">
                    <app-button [variant]="'primary'" size="sm" class="w-full" (onClick)="callNow()">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      Call Now
                    </app-button>
                    
                    <app-button [variant]="'outline'" size="sm" class="w-full" routerLink="/quote">
                      <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Request Quote
                    </app-button>
                  </div>
                </ui-card-content>
              </ui-card>

            </div>
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
        ])
    ]
})
export class ContactComponent implements OnInit {
    companyData = COMPANY_DATA;
    services = SERVICES_DATA;
    contactForm: FormGroup;
    isSubmitting = false;
    showSuccess = false;
    showError = false;

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^(\+971|0)?[0-9]{9}$/)]],
            company: [''],
            serviceType: ['', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnInit() {
        console.log('OPTIFAC Contact Page Loaded');
    }

    getFieldError(fieldName: string): string {
        const field = this.contactForm.get(fieldName);
        if (field?.errors && field.touched) {
            if (field.errors['required']) return `${fieldName} is required`;
            if (field.errors['email']) return 'Please enter a valid email address';
            if (field.errors['minlength']) return `${fieldName} is too short`;
            if (field.errors['pattern']) return 'Please enter a valid UAE phone number';
        }
        return '';
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSubmitting = true;

            // Simulate API call
            setTimeout(() => {
                this.isSubmitting = false;
                this.showSuccess = true;
                this.contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.showSuccess = false;
                }, 5000);
            }, 2000);
        }
    }

    callNow() {
        window.open(`tel:${this.companyData.phone}`, '_self');
    }
}