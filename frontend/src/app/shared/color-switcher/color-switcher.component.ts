import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.scss'],

})
export class ColorSwitcherComponent implements OnInit {



  constructor() { }

  ngOnInit() {

     // theme setting
	 $(".switcher-icon").on("click", function(e) {
    e.preventDefault();
    $(".right-sidebar").toggleClass("right-toggled");
});

$('#theme1').click(theme1);
$('#theme2').click(theme2);
$('#theme3').click(theme3);
$('#theme4').click(theme4);
$('#theme5').click(theme5);
$('#theme6').click(theme6);
$('#theme7').click(theme7);
$('#theme8').click(theme8);
$('#theme9').click(theme9);
$('#theme10').click(theme10);
$('#theme11').click(theme11);

function theme1() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme1');
  $('#active-class').attr('class', 'navigation active1');

}

function theme2() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme2');
  $('#active-class').attr('class', 'navigation active1');

}

function theme3() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme3');
  $('#active-class').attr('class', 'navigation active1');

}

function theme4() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme4');
  $('#active-class').attr('class', 'navigation active1');

}

function theme5() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme5');
  $('#active-class').attr('class', 'navigation active1');

}

function theme6() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme6');
  $('#active-class').attr('class', 'navigation active1');

}

function theme7() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme7');
  $('#active-class').attr('class', 'navigation active1');

}

function theme8() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme8');
  $('#active-class').attr('class', 'navigation active1');

}

function theme9() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme9');
  $('#active-class').attr('class', 'navigation active1');

}

function theme10() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme10');
  $('#active-class').attr('class', 'navigation active1');

}

function theme11() {
  $('#sidebar-wrapper').attr('class', 'sidebar bg-theme bg-theme11');
  $('#active-class').attr('class', 'navigation active1');

}


// header setting

$('#header1').click(header1);
$('#header2').click(header2);
$('#header3').click(header3);
$('#header4').click(header4);
$('#header5').click(header5);
$('#header6').click(header6);
$('#header7').click(header7);
$('#header8').click(header8);
$('#header9').click(header9);
$('#header10').click(header10);
$('#header11').click(header11);

function header1() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme1');
}

function header2() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme2');
}

function header3() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme3');
}

function header4() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme4');
}

function header5() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme5');
}

function header6() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme6');
}

function header7() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme7');
}

function header8() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme8');
}

function header9() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme9');
}

function header10() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme10');
}

function header11() {
  $('#header-setting').attr('class', 'navbar navbar-expand fixed-top color-header bg-theme11');
}



// Active Class setting

$('#active1').click(active1);
$('#active2').click(active2);
$('#active3').click(active3);
$('#active4').click(active4);
$('#active5').click(active5);
$('#active6').click(active6);

function active1() {
  $('#active-class').attr('class', 'navigation active1');
  theme1();
}

function active2() {
  $('#active-class').attr('class', 'navigation active2');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function active3() {
  $('#active-class').attr('class', 'navigation active3');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function active4() {
  $('#active-class').attr('class', 'navigation active4');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function active5() {
  $('#active-class').attr('class', 'navigation active5');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function active6() {
  $('#active-class').attr('class', 'navigation active6');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}




// Shadow Class setting

// id selecter is same for shadow and active class

$('#shadow1').click(Shadow1);
$('#shadow2').click(Shadow2);
$('#shadow3').click(Shadow3);
$('#shadow4').click(Shadow4);
$('#shadow5').click(Shadow5);
$('#shadow6').click(Shadow6);

function Shadow1() {
  $('#active-class').attr('class', 'navigation shadow1');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function Shadow2() {
  $('#active-class').attr('class', 'navigation shadow2');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function Shadow3() {
  $('#active-class').attr('class', 'navigation shadow3');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function Shadow4() {
  $('#active-class').attr('class', 'navigation shadow4');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function Shadow5() {
  $('#active-class').attr('class', 'navigation shadow5');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}

function Shadow6() {
  $('#active-class').attr('class', 'navigation shadow6');
  $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");

}





// default header & sidebar

$(document).ready(function(){

  $("#default-header").click(function(){

  $("#header-setting").removeClass("color-header bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");


  });


  $("#default-sidebar").click(function(){

    $("#sidebar-wrapper").removeClass("bg-theme bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6 bg-theme7 bg-theme8 bg-theme9 bg-theme10 bg-theme11");
    $("#active-class").removeClass("active1 active2 active3 active4 active5 active6");

  });


  $("#default-sidebar-active").click(function(){

    $("#active-class").removeClass("active1 active2 active3 active4 active5 active6");

  });



  $("#default-shadow").click(function(){

    $("#active-class").removeClass("shadow1 shadow2 shadow3 shadow4 shadow5 shadow6");

  });



});






  }

}
