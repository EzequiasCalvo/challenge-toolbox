export function parseCSV (csvString) {
  // Split the input into rows by newline
  const rows = csvString.trim().split('\n')

  // Extract the header row and split it into columns
  const headers = rows.shift().split(',')

  // Map each row to an object with keys from the headers
  const data = rows.map((row) => {
    const values = row.split(',')
    return headers.reduce((object, header, index) => {
      object[header] = values[index]
      return object
    }, {})
  })

  return data
}
