angular-hitcounter
================

angular component to record number of hit called with angular

How to install
==========

bower install angular-hitcounter --save

How to used
==========

Very simple, you just register the module hitcounter on your angular application module.

You can print the count number when using the directive <hit-counter>


===

Example

*JS*

angular.module('myapp',['hitcounter']);

*HTML*

\<hit-counter>\</hit-counter>

Dependencies
==========

Angular: 1.2.x

Underscore : 1.x

Undercore is needed for debounce functionality. Counter is update each 500ms for not shotgun the directive 

