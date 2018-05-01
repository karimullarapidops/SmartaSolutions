import { trigger, state, style, transition, animate, query, animateChild, animation, useAnimation } from "@angular/animations";

// re-usable animations starts

export let slideAnimation = animation([
    style({opacity:0, transform:'translateX(-100%)'}),
    animate(500)
]);

export let zoomInAnimation = animation([
    style({opacity:0, transform:'scale(3,3)'}),
    animate(500)
]);

export let dropInAnimation = animation([
    style({transform:'translateY(-500px)'}),
    animate('0.6s cubic-bezier(.55,.32,.53,1.01)')
]);

// re-usable animation ends

export let slide = trigger('slide',[
transition(':enter',[
    query('#extras',useAnimation(dropInAnimation)),
    query('@zoomin',animateChild())
    ])
]);

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

export let zoomin = trigger('zoomin',[transition(':enter', useAnimation(zoomInAnimation))]);