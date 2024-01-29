# angular basic services example
In basic example we have created the instance for services.

# In Dependecy Injection we let angular create the instance for the services.
--> class recieves its dependencies from an external source rather than creating them itself.
--> not tightly coupled with service class
--> classes can hold external logic without knowing how to create it.

# Hierarchical Injection
When we provide a dependency on a component, the same instance of that dependency
is injected in component class and all its child components and their child components.
This is called as hierarchical injection.
parent component provider will bw injected to all child components and following child components.

# Dependency Override
When we provide a dependency on a component and we also provide a dependency on
its child component, child component dependency instance will override its parent
component dependency instance.

# Dependency injection on Root Component
When we provide a dependency on root component, same instance of that dependency is
injected to all components, directives and services.

# Module Injector
We can also inject a service from Module class. In that case same instance of the
dependency will be available throughout the Angular application. In this way we
implement singleton pattern where a single instance is shared throughout the application.