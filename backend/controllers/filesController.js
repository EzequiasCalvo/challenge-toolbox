import { fetchFileList, fetchFileContent } from '../services/apiService.js'
import { parseCSV } from '../utils/csvParser.js'

const isValueValid = (value) =>
  value !== undefined && value !== null && value !== ''

const isLineValid = ({ text, number, hex }) =>
  isValueValid(text) && isValueValid(number) && isValueValid(hex)

const removeFileProperty = (line) => {
  const { file, ...rest } = line
  return rest
}

export const fetchData = async (req, res) => {
  try {
    const { fileName } = req.query
    const files = await fetchFileList()

    let filteredFiles = files

    if (fileName) {
      filteredFiles = files.filter((file) => {
        return file === fileName
      })
    }

    const dataPromises = filteredFiles.map(async (fileName) => {
      try {
        const fileContent = await fetchFileContent(fileName)
        let parsedData = parseCSV(fileContent)

        // Filter out invalid lines and remove 'file' property from each line
        parsedData = parsedData.filter(isLineValid).map(removeFileProperty)

        return { file: fileName, lines: parsedData }
      } catch (error) {
        console.error(`Error processing file ${fileName}: ${error}`)
        return null
      }
    })

    const data = (await Promise.all(dataPromises)).filter(
      (item) => item !== null
    )
    res.json(data)
  } catch (error) {
    console.error('Failed to fetch data:', error)
    res.status(500).send('Failed to fetch data')
  }
}
