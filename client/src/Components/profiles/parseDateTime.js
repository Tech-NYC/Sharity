const formatTime = (t) => {

  // time parsing for 24:59:00 format

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

// const formatDate = (d) => {
//   // date formating for 2021-02-30T00:00:00.000Z
//   let date = d.
// }