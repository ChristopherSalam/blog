
  $(function() {
    $('#slides').slidesjs({
        play: {
          active: true,
          effect:"fade",
          auto: true,
          interval: 16000,
          swap: true,
          pauseOnHover: true,
          restartDelay: 6000
        },
        callback: {
          loaded: function(number) {
            console.log('SlidesJS: Loaded with slide #' + number);
            $('#slidesjs-log .slidesjs-slide-number').text(number);
          },
          complete: function(number) {
            console.log('SlidesJS: Current slide is #' + number);
            function clear(){
              document.getElementById("dig").style.listStyleImage = "none";
              document.getElementById("rig").style.listStyleImage = "none";
              document.getElementById("aidg").style.listStyleImage = "none";
              document.getElementById("cec").style.listStyleImage = "none";
              document.getElementById("menu").style.listStyle = "none";
              document.getElementById("ud").style.listStyle = "none";
              document.getElementById("gd").style.listStyle = "none";
            }
              clear();
              if (number == 1 || number == 3 || number == 5 || number == 8) {
              document.getElementById("dig").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 2 || number == 7) {
              document.getElementById("rig").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 6) {
              document.getElementById("aidg").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 9) {
              document.getElementById("gd").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 4) {
              document.getElementById("cec").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 10) {
              document.getElementById("ud").style.listStyleImage = "url('css/img/bulb.png')";
            }
              if (number == 1) {
              $("#location").html("Hadley, Massachusetts.");
              $("#textbox").html("This is a biogas Emergency Flare. Excess Biogas from overproduction or engine malfunction is burned here. In this picture, the throttle is opened up all the way.");
              }
              if (number == 2) {
              $("#location").html("Bakersfield, California. ");
              $("#textbox").html("This oil well is within a suburban neighboorhood and are subject to additional safety measures. This oil well sited in a suburban community is under numerous expanded regulations and government site visits.");
              }
              if (number == 3) {
              $("#location").html("Hadley, Massachusetts.");
              $("#textbox").html("This is a hybrid hydrogen sulfide scrubber system, following the anaerobic digestion process. This scrubber removes the sour gas from methane to prepare it for combustion.");
              }
              if (number == 4) {
              $("#location").html("Sacramento, California.");
              $("#textbox").html("Inside your walls is insulation, and additional investment during construction can reduce energy use significantly over the life of the project. Barriers to this are split incentives for homebuilders and homeowners.");
              }
              if (number == 5) {
              $("#location").html("Canton, New York.");
              $("#textbox").html("This is an RCM Scrubber System attached to RCM Digester. Using biological & chemical filters, these two media allows for superior and cost effective Hydrogen Sulfide Protection.");
              }
              if (number == 6) {
              $("#location").html("Quetzaltenango, Guatemala.");
              $("#textbox").html("This is a digester contructed by Xelateco, a for profit green energy company that was supported by AIDG in Guatemala. This project uses animal waste, sanitizes it, and produces cooking heat as a co-product.");
              }
              if (number == 7) {
              $("#location").html("Taft, California.");
              $("#textbox").html("This is a maintenance rig, doing cleanup work on a well. Strict regulation, self-reporting and the internet has led to safety gains in continually evolving energy industries.");
              }
              if (number == 8) {
              $("#location").html("Canton, New York.");
              $("#textbox").html("While many different feedstocks can power anaerobic digester, manure is among the best because it has naturally neutral pH, has plenty of microbes and food for microbes, and is abundant and has little value elsewhere.");              
              }
              if (number == 9) {
              $("#location").html("Bakersfield & Davis, California.");
              $("#textbox").html("Agricultural Engineers don't really get many chances to use tractors. This image is from my time in agricultural living coops, where I got to experience first hand some of the stuff I learned in class.");
              }
              if (number == 10) {
              $("#location").html("San Leandro, California");
              $("#textbox").html("Biogas projects at breweries are being investigated. Projects at breweries are particularly difficult processes because alcohol can kill bacteria and be difficult to digest.");
              } 
        }
      }
    });
  });

function info() {
  document.getElementById("flip-container").classList.toggle("hover");
}