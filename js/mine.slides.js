
  $(function() {
    $('#slides').slidesjs({
        play: {
          active: true,
          effect:"fade",
          auto: true,
          interval: 8000,
          swap: true,
          pauseOnHover: true,
          restartDelay: 4000
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
            }  else if (number == 6 || number == 14) {
              document.getElementById("aidg").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 9 || number == 13) {
              document.getElementById("gd").style.listStyleImage = "url('css/img/bulb.png')";
            } else if (number == 4) {
              document.getElementById("cec").style.listStyleImage = "url('css/img/bulb.png')";
            }
        }
      }
    });
  });
