import { trigger, state, style, transition, animate } from "@angular/animations";

export let slide = trigger('slide',[

transition(':enter',[
    style({transform:'translateY(-500px)'}),
    animate(600)
])
]);