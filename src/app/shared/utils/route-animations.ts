import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate(
            '300ms ease-out',
            style({ transform: 'translateX(0)', opacity: 1 }),
          ),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0)', opacity: 1 }),
          animate(
            '300ms ease-out',
            style({ transform: 'translateX(-100%)', opacity: 0 }),
          ),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);
