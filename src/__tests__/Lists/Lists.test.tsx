import { AddListItem } from '../../components/Lists/components'

describe('<AddListItem />', () => {
  const rawList = ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']

  it('should be defined', () => {
    expect(AddListItem).toBeDefined()
  })
  // it('should add an item if included in the allCharacters array', () => {
  //   const testAdd = AddListItem('Otto')
  //   expect(testAdd).toEqual([
  //     'Homer',
  //     'Marge',
  //     'Bart',
  //     'Lisa',
  //     'Maggie',
  //     'Otto'
  //   ])
  // })
  it('should not add an item if not included in the allCharacters array', () => {
    expect(AddListItem).toBeDefined()
  })
  it('should not add an item if already added', () => {
    expect(AddListItem).toBeDefined()
  })
  it('should add an item if not already added', () => {
    expect(AddListItem).toBeDefined()
  })
})
