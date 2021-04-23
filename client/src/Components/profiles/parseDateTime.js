export const formatTime = (t) => {

  // time parsing for 24:59:00 format

  if (t === 'CLOSED' || !t) return 'CLOSED'
  console.log('t', t)
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

export const formatDate = (d) => {
  // date formating for 2021-02-30T00:00:00.000Z
  let date = d.split('T')[0]
  let splitDate = date.split('-')
  let day = splitDate[2]
  let month = splitDate[1]
  let year = splitDate[0]

  return month + "/" + day + "/" + year
}