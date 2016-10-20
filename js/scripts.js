var stato=1;
var op1=0;
var op2=0;

function change(valore)
{
   if(stato==1)
   {
		document.getElementById('op1').innerHTML= valore;
		stato=2;
   }
   else
   {
		document.getElementById('op2').innerHTML= valore;
		stato=1;
   }
   
}

   var Publisher = {
	
		
        subscribers: {},       
		
		
        Subscribe: function (event, callback) {
            if (Publisher[event] && typeof callback === "function") {
                if (Publisher.subscribers[event]) {
                    Publisher.subscribers[event].callbacks.push(callback);
                }
                else {
                    Publisher.subscribers[event] = { callbacks: [callback] };
                }
            }
        },
		
		
        Publish: function (event, callback) {
            if (Publisher.subscribers[event].callbacks) {
                for (var callback in Publisher.subscribers[event].callbacks) {
                    Publisher.subscribers[event].callbacks[callback].apply(null,arguments);
                }
            }
        },

		
		PublishOnClick: function (event, arguments) {
            Publisher.Publish(event, arguments);
        }
    };

    var Subscriber1 = {
        initialize: function () {
            if (Publisher.Subscribe) {
                Publisher.Subscribe("PublishOnClick", Subscriber1.Action);
            }
        },
        Action: function () {
			document.getElementById('op3').innerHTML= "Addiction: " + (op1+op2);
        }
    };
    Subscriber1.initialize();

    var Subscriber2 = {
        initialize: function () {
            if (Publisher.Subscribe) {
                Publisher.Subscribe("PublishOnClick", Subscriber2.Action);
            }
        },
        Action: function () {
			document.getElementById('op4').innerHTML= "Subtraction: " + (op1-op2);
        }
    };
    Subscriber2.initialize();
	
	var Subscriber3 = {
        initialize: function () {
            if (Publisher.Subscribe) {
                Publisher.Subscribe("PublishOnClick", Subscriber3.Action);
            }
        },
        Action: function () {
			document.getElementById('op5').innerHTML= "Multiplication: " + (op1*op2);
        }
    };
    Subscriber3.initialize();


	
    var fld2 = document.getElementById("bt1"); 
    if (fld2.addEventListener) {
        fld2.addEventListener("click", function () {esegui(); }, false); 
    }
    else if (fld2.attachEvent) {
        fld2.attachEvent("onclick", function () { esegui();}); 
    }
	
	function esegui()
	{
            	var t1 = document.getElementById("op1").innerHTML; 
				var t2 = document.getElementById("op2").innerHTML; 
				op1= parseInt(t1);
				op2= parseInt(t2);
				Publisher.PublishOnClick("PublishOnClick", [op1, op2]); 
	
    }