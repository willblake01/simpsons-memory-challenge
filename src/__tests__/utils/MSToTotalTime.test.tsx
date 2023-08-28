import { msToTime } from '../../utils/MSToTotalTime'

describe('MSToTotalTime', () => {
  const testTime = 400000

  test('should convert milliseconds to total time in the form 00:00', () => {
    const convertedTime = msToTime(testTime)
    expect(convertedTime).toEqual('6:40')
  })
})
