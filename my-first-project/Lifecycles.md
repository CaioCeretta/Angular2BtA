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


## 3. ngDoCheck and children

  This event is fired every time the entry properties  of a component are verified
  Basically this happens everytime a component is initialized and the values are verified, this method is called

  ### ngAfterContentInit()

  This method is executed when angular performs any content projection of content on a  component views.
  So let's say we click on a button and it shows a value, then, this method is invoked.

  ### ngAfterContentChecked()

  This method is executed whenever the component content is verified with angular's update detection mechanism
  Basically, whenever there's a component update, like a sum of 1 + 1, it will then, verify...

  ### ngAfterViewInit()

  This method is executed when a component visualization has been totally initialized

  ### ngAfterViewChecked()

  This method is executed everytime the view of a component is verified with angular's update detection mechanism
  
  ### ngOnDestroy()

  This method is fired when we "destroy" a component, 


_____________________________________________//___________________________________________________________

We could see in the app component example, that it first loads everything, and then after every value is changed, it will
create fire again the ngDoCheck, ngAfterContentChecked and ngAfterViewChecked

1 - Fired on component init
2 - Fired on value update
3 - Fired when the view is loaded again

These are fired on every component update
