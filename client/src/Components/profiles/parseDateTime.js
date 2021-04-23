const formatTime = (t) => {
  // time parsing

  let time = t.split(":")
  let hh = Number(time[0])
  let m = Number(time[1])
  let h = hh
  let dd = "AM"

  if (h >= 12) {
    h = hh - 12
    dd = "PM"
  }

  if (h == 0) {
    h = 12
  }

  m = m < 10 ? "0"+m:m

  return h+":"+m+" "+dd

}

console.log(formatTime("19:00:00"))