# Angular 2+

These lifecycle events come always after the constructor

## 1. ngOnInit()

This event is initialized after the angular exhibit for the first time, the properties linked with the component data
or when a component is initialized.
This event is used mainly to initialize any data in a component.

An example:

You're creating a listing component, so we are fetching all the informations on the NgInit so as soon at its mounted
it will start loading any of the data needed.

## 2. ngOnChange

This event is executed everytime that a value of a controlled input inside the component is modified.
Everytime a component receives a data through @Input(), the ngOnChange() is invoked, and we can utilize this method so
we can manipulate the app in a way we want to when some external data, for example, is passed on



