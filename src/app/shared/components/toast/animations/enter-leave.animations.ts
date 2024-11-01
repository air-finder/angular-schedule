import { animate, state, style, transition, trigger } from "@angular/animations";

export const enterLeaveAnimations = [
  trigger('enter-leave', [
    state('void', style({ transform: 'translateX(330px)' })),
    state('*', style({ transform: 'translateX(0px)' })),
    transition(":enter", [ animate('0.3s ease-in-out') ]),
    transition(":leave", [ animate('0.2s ease-in-out') ])
  ]),
]