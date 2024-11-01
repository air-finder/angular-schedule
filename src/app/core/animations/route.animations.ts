import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimations = [
  trigger('routeAnimations', [
    transition('loginPage => layoutPage', [
      query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease', style({ transform: 'translateX(-100vw)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100vw)' }),
          animate('600ms ease', style({ transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ]),
    transition('layoutPage => loginPage', [
      query(':enter, :leave', style({ position: 'absolute' }), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease', style({ transform: 'translateX(100vw)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(-100vw)' }),
          animate('600ms ease', style({ transform: 'translateX(0)' }))
        ], { optional: true })
      ])
    ])
  ])
]
