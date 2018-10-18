import { dropInAnimation, slideAnimation, zoomInAnimation } from './animations';
import { trigger, state, style, transition, animate, query, animateChild, animation, useAnimation } from "@angular/animations";

export let slideh = trigger('slideh',[
    transition(':enter',[
        query('#home',useAnimation(dropInAnimation)),
        query('@fades',animateChild()),
        query('@fadeap',animateChild()),
        query('@fadeg',animateChild()),
        query('@fadeas',animateChild()),
        query('@fadeb',animateChild())
    ])
]);

export let fades = trigger('fades',[transition(':enter', useAnimation(slideAnimation))]);

export let fadeap = trigger('fadeap',[transition(':enter', useAnimation(slideAnimation))]);

export let fadeg = trigger('fadeg',[transition(':enter', useAnimation(slideAnimation))]);

export let fadeas = trigger('fadeas',[transition(':enter', useAnimation(slideAnimation))]);

export let fadeb = trigger('fadeb',[transition(':enter', useAnimation(slideAnimation))]);

export let slide = trigger('slide',[
    transition(':enter',[
        query('#extras',useAnimation(dropInAnimation)),
        query('@zoomin',animateChild())
        ])
    ]);

export let zoomin = trigger('zoomin',[transition(':enter', useAnimation(zoomInAnimation))]);