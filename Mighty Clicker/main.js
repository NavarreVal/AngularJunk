//****************************** SERVICES AND CONTROLLERS ******************************
    
// ** Blue service                  Red service
    //this.number=100               //this.number=100
    //this.increment=function       //this.increment=function
    //this.decrement=function       //this.decrement=function
    
//                          Controller   
    //-- app.controller("CtrlName", function($scope, RedService, BlueService {
    //-- app.service("RedService", function() {
                    // if they clicked red:
                    //      RS.increment
                    //      BS.decrement
                    // if they clicked blue:
                    //      BS.increment    
                    //      RS.decrement
    
    // ** Blue service is good at dealing with blue numbers.  Same for Red.
    //      try not to mix the two, or have blue running red functions, etc.
    //      "Never the twain shall mesh!"  Instead, the controller tells 
    //      each service which function to run at what time.
    
    //  ** We're calling these service, but they're basically objects.
    
    // ** if I add BS.blah="Hello World" to controller, it adds that to the 
    //      blue service.  This is not best practice, and can cause issues, 
    //      but it IS possible to use.
    
//******************************