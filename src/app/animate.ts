import { trigger, state, style, transition, animate, query, animateChild } from "@angular/animations";

export let slide = trigger('slide',[

transition(':enter',[
    style({transform:'translateY(-500px)'}),
    animate(600)
])
]);

export let slideh = trigger('slideh',[

    transition(':enter',[
        query(':enter',[
        style({transform:'translateY(-500px)'}),
        animate(600)
        ]),
        query('@fades',animateChild()),
        query('@fadeap',animateChild()),
        query('@fadeg',animateChild()),
        query('@fadeas',animateChild()),
        query('@fadeb',animateChild())
    ])
    ]);


export let fades = trigger('fades',[
    transition(':enter',[
        style({opacity:0, transform:'translateX(-100%)'}),
        animate(500)
    ])
])
export let fadeap = trigger('fadeap',[
    transition(':enter',[
        style({opacity:0, transform:'translateX(-100%)'}),
        animate(500)
    ])
])
export let fadeg = trigger('fadeg',[
    transition(':enter',[
        style({opacity:0, transform:'translateX(-100%)'}),
        animate(500)
    ])
])
export let fadeas = trigger('fadeas',[
    transition(':enter',[
        style({opacity:0, transform:'translateX(-100%)'}),
        animate(500)
    ])
])
export let fadeb = trigger('fadeb',[
    transition(':enter',[
        style({opacity:0, transform:'translateX(-100%)'}),
        animate(500)
    ])
])