import { trigger, state, style, transition, animate, query, animateChild } from "@angular/animations";

export let slide = trigger('slide',[

transition(':enter',[
    query('#extras',[
    style({transform:'translateY(-500px)'}),
    animate('0.6s cubic-bezier(.64,-0.42,.52,1.36)')
    ]),
    query('@zoomin',animateChild())
])
]);

export let slideh = trigger('slideh',[

    transition(':enter',[
        query('#home',[
        style({transform:'translateY(-500px)'}),
        animate('0.6s cubic-bezier(.64,-0.42,.52,1.36)')
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
export let zoomin = trigger('zoomin',[
    transition(':enter',[
        style({opacity:0, transform:'scale(3,3)'}),
        animate(500)
    ])
])