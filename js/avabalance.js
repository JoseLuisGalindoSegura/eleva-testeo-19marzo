//Funcio para cambiar el valor de los saldos
selectOption();

function selectOption() {
  var selectx = document.getElementById('savingsAccount');
  var selectx = selectx.options[selectx.selectedIndex].value;
  var lbl = document.getElementById('changeValue');
  if (selectx == '1') {
    lbl.innerText = '$300.000'
  } else if (selectx == '2') {
    lbl.innerText = '$1.700.000'
  } else if (selectx == '3') {
    lbl.innerText = '$420.000'
  }
  if (selectx == "1") {

    document.getElementById("saldoDisponible").classList.remove("avaBalance--showNone");
    document.getElementById("saldoDisponible").classList.add("avaBalance--show");

  } else if (selectx == "0") {

    document.getElementById("saldoDisponible").classList.remove("avaBalance--show");
    document.getElementById("saldoDisponible").classList.add("avaBalance--showNone");

  }
}

selectOption2();

function selectOptionAL() {
  var selectx = document.getElementById('actividad-laboral');
  var selectx = selectx.options[selectx.selectedIndex].value;
  var lbl = document.getElementById('changeValueAL');
  if (selectx == '1') {
    lbl.innerText = '$300.000'
  } else if (selectx == '2') {
    lbl.innerText = '$1.700.000'
  } else if (selectx == '3') {
    lbl.innerText = '$420.000'
  }
  if (selectx == "1") {

    document.getElementById("saldoDisponibleAL").classList.remove("avaBalance--showNone");
    document.getElementById("saldoDisponibleAL").classList.add("avaBalance--show");

  } else if (selectx == "0") {

    document.getElementById("saldoDisponibleAL").classList.remove("avaBalance--show");
    document.getElementById("saldoDisponibleAL").classList.add("avaBalance--showNone");

  }
}