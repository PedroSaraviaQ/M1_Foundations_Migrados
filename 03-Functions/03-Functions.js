function timeConversion(time) {
  // dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
  // Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
  //las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas
  if (
    time.slice(0, 2) > 12 ||
    time.slice(3, 5) > 59 ||
    time.slice(6, 8) > 59 ||
    time.length !== 10
  )
    return false;
  let h = time.slice(0, 2);
  if (time[8] === "A") {
    if (h === "12") time = time.replace(h, "00");
    time = time.replace("A", "");
  } else {
    if (h !== "12") time = time.replace(h, h * 1 + 12);
    time = time.replace("P", "");
  }
  time = time.replace("M", "");
  return time;
}

module.exports = {
  timeConversion,
};
