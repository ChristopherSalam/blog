
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
              if (number == 1 || number == 3 || number == 5 || number == 8 || number == 10 || number == 12) {
              document.getElementById("dig").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 2 || number == 7 || number == 11 || number == 15) {
              document.getElementById("rig").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 16) {
              document.getElementById("ud").style.listStyleImage = "url('css/img/bulb.png')";
            }  else if (number == 6 || number == 13) {
              document.getElementById("aidg").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 9 || number == 14) {
              document.getElementById("gd").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 4) {
              document.getElementById("cec").style.listStyleImage = "url('css/img/bulb.png')";
            }
              if (number == 1) {
              $("#location").html("Hadley, Massachusetts.");
              $("#textbox").html("Biogas Emergency Flare. Excess Biogas from overproduction or engine malfunction is burned here. In this picture, the throttle is opened up all the way.");
              }
              if (number == 2) {
              $("#location").html("Bakersfield, California. ");
              $("#textbox").html("Oil wells within communities are subject to additional safety measures. This oil well sited in a suburban community is under numerous expanded regulations and government site visits. Click to see interactive maps of the wells in the California central valley.");
              }
              if (number == 3) {
              $("#location").html("Hadley, Massachusetts.");
              $("#textbox").html("This is a hybrid hydrogen sulfide scrubber system, following the anaerobic digestion process. This scrubber removes the sour gas from methane to prepare it for combustion. Click to learn more.");
              }
              if (number == 4) {
              $("#location").html("Sacramento, California.");
              $("#textbox").html("Insulation investment during construction can reduce energy use significantly over the life of the project. Barriers to this are split incentives for homebuilders and homeowners. Government programs try to combat these split incentives, click to learn about AB 1103.");
              }
              if (number == 5) {
              $("#location").html("Canton, New York.");
              $("#textbox").html("RCM Scrubber System attached to RCM Digester. Using biological & chemical filters, these two media allows for superior and cost effective Hydrogen Sulfide Protection. Click to read about the project.");
              }
              if (number == 6) {
              $("#location").html("Quetzaltenango, Guatemala.");
              $("#textbox").html("This is a digester contructed by Xelateco, a for profit green energy company that was supported by AIDG in Guatemala. This project uses animal waste, sanitizes it, and produces cooking heat as a co-product. Click to see a sample video demonstrating this and other technologies from AIDG.");
              }
              if (number == 7) {
              $("#location").html("Kern County, California");
              $("#textbox").html("The true danger in petroleum is driving, not drilling. In my experience, I'd have to agree. Click to read an New York Times article on the topic.");
              }
              if (number == 8) {
              $("#location").html("Canton, New York.");
              $("#textbox").html("Farmers' hesitation on anaerobic digester projects are well documented. Between a complex process and little or no support from installers, the projects carry big risks. Click to learn more.");              
              }
              if (number == 9) {
              $("#location").html("Bakersfield & Davis, California.");
              $("#textbox").html("Agricultural Engineers don't really get many chances to use tractors. This image is from my time in agricultural living coops, where I got to experience first hand some of the stuff I learned in class. Click to see the Domes coop at UCD where I lived in graduate school.");
              }
              if (number == 10) {
              $("#location").html("Winona, Minnesota.");
              $("#textbox").html("This photo is from a recently constructed digester in Minnesota. Dairy Digesters are responsible for processing manure waste, reducing bacteria, producing methane in the form of biogas. What is biogas? Click the digester for a primer.");
              }
              if (number == 11) {
              $("#location").html("Taft, California.");
              $("#textbox").html("Self-reporting and the internet has led to safety gains in continually evolving energy industries. Click to learn about ad-hoc injury reporting from energy jobs in the central valley.");
              }
              if (number == 12) {
              $("#location").html("San Leandro, California");
              $("#textbox").html("Biogas projects at breweries are being investigated. Projects at breweries are particularly difficult processes because alcohol can kill bacteria and be difficult to digest. Click to learn more.");
              }
              if (number == 13) {
              $("#location").html("Quetzaltenango, Guatemala.");
              $("#textbox").html("AIDG is no longer in operation. AIDG, or the Appropriate Infrastructure Development Group aimed to aid start for profit green businesses in Guatemala and Haiti. In this photo, I am teaching a workshop on composting. Click the link to see some of their legacy material.");
              }
              if (number == 14) {
              $("#location").html("Porterville, CA");
              $("#textbox").html("Oil & Agriculture, interwoven but not interdependent. This is a very old struggle, and both represent two lifestyles and professions that are becoming less common in the United States. Click to read an article on this topic.");
              }
              if (number == 15) {
              $("#location").html("Quetzaltenango, Guatemala.");
              $("#textbox").html("My interest in fermentation peaked during my time in Guatemala, where the food was often not safe enough to eat without experiencing some stomach upset. Pickling vegetables, called 'Curtido' was a strategy I learned there.");
              }
              if (number == 16) {
              $("#location").html("Riverside, CA");
              $("#textbox").html("The capstone senior design project is one of the main times to really explore your interests during your undergraduate degree. Click to learn more about our cproject: Zero-Waste Biodiesel.");
              }
        }
      }
    });
  });

function info() {
  document.getElementById("flip-container").classList.toggle("hover");
}