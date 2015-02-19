    $(function() {
      $('#slides').slidesjs({
        width: 1100,
        height: 800,
        play: {
          active: true,
          effect:"fade",
          auto: true,
          interval: 4000,
          swap: true,
          pauseOnHover: true,
          restartDelay: 5000
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
              document.getElementById("pe").style.listStyle = "none";
            }
              clear();
              if (number != 1 && number != 13 && number != 9 && number % 2 == 1 ) {
              document.getElementById("dig").style.listStyleImage = "url('img/bulb.png')";
            } else if (number == 2 || number == 10 || number == 8) {
              document.getElementById("rig").style.listStyleImage = "url('img/bulb.png')";
            } else if (number == 13) {
              document.getElementById("pe").style.listStyleImage = "url('img/bulb.png')";
            } else if (number == 6) {
              document.getElementById("ud").style.listStyleImage = "url('img/bulb.png')";
            }  else if (number == 12 || number == 14) {
              document.getElementById("aidg").style.listStyleImage = "url('img/bulb.png')";
            } else if (number == 9) {
              document.getElementById("gd").style.listStyleImage = "url('img/bulb.png')";
            } else if (number == 4) {
              document.getElementById("cec").style.listStyleImage = "url('img/bulb.png')";
            }
          }
        }
      });
    });