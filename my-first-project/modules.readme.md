# Modules

An angular application can be similar to a puzzle
Where each block has the objective to provide a specific functionality or resource

Let's say we have a module that returns our dashboard, and on this module it is registered various components, so as a user product module. Like a calculus system, where the user will have another module where the user has access to this functionality. So it will be a big puzzle where we go fitting the block pieces to achieve the final goal.


Angular offers us a good way to organize these blocks in a simple and effective manner, utilizing modules, also known as ngModules

The anatomy of a ngModule is

@NgModule({
  declarations: [] our module
  imports: [], 
  exports: [],
  providers: [],
  bootstrap: []
})


declarations: This property is used to declare the components, directives, and pipes that belong to this module. These declared items are only available within the scope of the module.

imports: The imports property specifies an array of other modules that should be imported and made available for use within the current module. It allows you to reuse functionality from other modules in your application.

exports: The exports property defines a list of components, directives, and pipes that should be made available for other modules to use. This is particularly useful when creating shared modules that provide common functionality to multiple parts of the application.

providers: The providers property is used to register services and other injectable dependencies that should be available for injection throughout the module. Services listed here are typically instantiated as singletons, ensuring there is only one instance of each service within the module.
This is where we use services, when we want to perform an external action, so we use it when we
want to use dependency injections, per example

bootstrap: This property is used in the root module of an Angular application to specify the component that should be bootstrapped when the application starts. The bootstrapped component represents the starting point of the application's view hierarchy.


____________________________________//________________________________________-

An angular, basically it

Imports other modules
declares components, directives or pipes
provides services
exports other modules
