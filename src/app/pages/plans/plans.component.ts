import { CurrencyPipe } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { ButtonComponent, CardComponent, IconComponent, PillComponent, Theme } from '@brunovbsilva/material';
import { SessionUserService } from '@core/service/session-user.service';
import { PlanType } from '@models/pages/plans/plan-type.enum';
import { TranslateModule } from '@ngx-translate/core';
import { StripeService } from '@services/stripe/stripe.service';

type PaymentMethods = 'month' | 'year';

@Component({
  selector: 'app-plans',
  imports: [
    CardComponent,
    CurrencyPipe,
    ButtonComponent,
    PillComponent,
    IconComponent,
    TranslateModule
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent implements OnInit {
  paymentMethod: PaymentMethods = 'month';
  protected _plans = this.stripeService.plans$;

  constructor(
    private stripeService: StripeService,
    private sessionUserService: SessionUserService
  ) {}

  ngOnInit(): void {
    this.stripeService.getPlans();
  }

  private getPrice(planType: PlanType) {
    const plan = this._plans().find(plan => plan.planType === planType)?.price;
    return plan ? plan / 100 : 0;
  }

  
  protected createInvoice(type: PlanType) {
    this.stripeService.createInvoice({ planType: type, userId: this.sessionUserService.userId$() })
      .then(response => {
        console.log('checkout link', response.result);
        window.open(response.result as string, '_self');
      });
  }

  plansMonth = computed(() => {
    return [
      {
        title: 'plans.basic',
        price: this.getPrice(PlanType.BasicMonth),
        theme: 'warning' as Theme,
        features: [
          'plans.features.basic-schedule',
          'plans.features.basic-services',
          'plans.features.basic-workers',
          'plans.features.email-reminders'
        ],
        mostPopular: false,
        planType: PlanType.BasicMonth
      },
      {
        title: 'plans.pro',
        price: this.getPrice(PlanType.ProMonth),
        theme: 'primary' as Theme,
        features: [
          'plans.features.pro-schedule',
          'plans.features.pro-services',
          'plans.features.pro-workers',
          'plans.features.email-reminders',
          'plans.features.whatsapp-reminders'
        ],
        mostPopular: true,
        planType: PlanType.ProMonth
      },
      {
        title: 'plans.ultra',
        price: this.getPrice(PlanType.UltraMonth),
        theme: 'secondary' as Theme,
        features: [
          'plans.features.ultra-schedule',
          'plans.features.ultra-services',
          'plans.features.ultra-workers',
          'plans.features.email-reminders',
          'plans.features.whatsapp-reminders'
        ],
        mostPopular: false,
        planType: PlanType.UltraMonth
      }
    ];
  });

  plansYear = computed(() => {
    return [
      {
        title: 'plans.basic',
        price: this.getPrice(PlanType.BasicYear),
        theme: 'warning' as Theme,
        features: [
          'plans.features.basic-schedule',
          'plans.features.basic-services',
          'plans.features.basic-workers',
          'plans.features.email-reminders'
        ],
        mostPopular: false,
        planType: PlanType.BasicYear
      },
      {
        title: 'plans.pro',
        price: this.getPrice(PlanType.ProYear),
        theme: 'primary' as Theme,
        features: [
          'plans.features.pro-schedule',
          'plans.features.pro-services',
          'plans.features.pro-workers',
          'plans.features.email-reminders',
          'plans.features.whatsapp-reminders'
        ],
        mostPopular: true,
        planType: PlanType.ProYear
      },
      {
        title: 'plans.ultra',
        price: this.getPrice(PlanType.UltraYear),
        theme: 'secondary' as Theme,
        features: [
          'plans.features.ultra-schedule',
          'plans.features.ultra-services',
          'plans.features.ultra-workers',
          'plans.features.email-reminders',
          'plans.features.whatsapp-reminders'
        ],
        mostPopular: false,
        planType: PlanType.UltraYear
      }
    ]
  });
}
