import { trigger, state, style, transition, animate } from "@angular/animations";

export let fade = trigger('fade',[

transition(':enter',[
    style({transform:'translateY(-500px)'}),
    animate(600)
])
]);