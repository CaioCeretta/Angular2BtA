# Property Binding

Define variables to html properties or directives

## HTML

<button [disabled]="disabledButton">Button</button>

<img [src]="itemImageUrl" />
<img src="{{itemImageUrl}}" />


In html, button has a property called disabled and when we use an existent property with brackets around it, we can use
typescript values like setting the value dynamically with a data from our class or with simple ts expression, evaluating
to true or false

in the image example, we can set in both ways, [src]="itemImageUrl or src="{{itemImageUrl}}" this are two ways that will
generate the same result

 # Event Binding

it's the event linking that allow us to listen and answer to the user actions, like a keypress, mouse movement, clicks,
hovers

## HTML

<button (click)="calc()">Button</button>

# Two-way databind

It's the property binding with event-binding, we can use it to listen for events and update values simultaneously between
parents and childrens

## HTML
<input [(ngModel)]="name" />
<span>{{name}}</span>

## TS

public name = 'Caio'

In this example above the span will reflect the value 'Caio' setted on the ts file, but as we type on the input, it will
allow us to change the name property on the ts file, while changing the input as well as showing updating the client side

