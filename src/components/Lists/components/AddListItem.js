import React, { useContext, useState } from 'react'
import { Context } from './../../../context'
import { LargeButton, UserInput } from './../../../components/utils'
import { sweetAlert } from './../../utils/Alert'

const AddListItem = () => {
  const { rawList, setRawList } = useContext(Context)

  const [newItem, setNewItem] = useState('')

  const allCharacters = [
    'Homer Simpson',
    'Marge Simpson',
    'Bart Simpson',
    'Lisa Simpson',
    'Maggie Simpson',
    'Abraham Simpson',
    "Santa's Little Helper",
    'Snowball II',
    'Snowball V',
    'Apu Nahasapeemapetilon',
    'Barney Gumble',
    'Bleeding Gums Murphy',
    'Chief Clancy Wiggum',
    'Dewey Largo',
    'Eddie',
    'Edna Krabappel',
    'Itchy & Scratchy',
    'Janey Powell',
    'Jasper Beardly	',
    'Jimbo Jones',
    'Kearney Zzyzwicz',
    'Kent Brockman',
    'Krusty the Clown',
    'Lenny Leonard',
    'Lionel Hutz',
    'Luann Van Houten',
    'Martin Prince',
    'Maude Flanders',
    'Milhouse Van Houten',
    'Miss Hoover',
    'Moe Szyslak',
    'Ned Flanders',
    'Nelson Muntz',
    'Otto Mann',
    'Patty Bouvier',
    'Principal Skinner',
    'Professor Frink',
    'Rainier Wolfcastle',
    'Ralph Wiggum',
    'Rod Flanders',
    'Seymour Skinner',
    'Sherri & Terri',
    'Sideshow Bob',
    'Sideshow Mel',
    'Snake Jailbird',
    'Troy McClure',
    'Waylon Smithers',
    'Wendell Borton',
    'Abe Simpson',
    'Agnes Skinner',
    'Allison Taylor',
    'Aristotle Amadopolis',
    'Artie Ziff',
    'Bernice Hibbert',
    'Birch Barlow',
    'Brandine Spuckler',
    'Reverend Timothy Lovejoy',
    'C. Montgomery Burns',
    'Carl Carlson',
    'Cletus Spuckler',
    'Comic Book Guy',
    'Cookie Kwan',
    'Disco Stu',
    'Dr. Hibbert',
    'Dr. Nick Riviera',
    'Duffman',
    'Eleanor Abernathy',
    'Elizabeth Hoover',
    'Fat Tony',
    'Frank Grimes',
    'Gil Gunderson',
    'Groundskeeper Willie',
    'Hans Moleman',
    'Helen Lovejoy',
    'Herman Hermann',
    'Hollis Hurlbut',
    'Jacqueline Bouvier',
    'Jebediah Springfield',
    'Judge Roy Snyder',
    'Kang & Kodos',
    'Kirk Van Houten',
    'Lionel Hutz',
    'Lunchlady Doris'
  ]

  const handleInput = e => {
    const { value } = e.target
    setNewItem(value)
  }

  const addListItem = character => {
    const alreadyAdded = rawList.includes(character)
    const isSimpsonsCharacter = allCharacters.some(familyMember =>
      familyMember.includes(character)
    )

    if (alreadyAdded) {
      sweetAlert(
        'Duplicate Error',
        `${character} already added, please add a different character.`
      )
    } else if (!isSimpsonsCharacter) {
      sweetAlert(
        'Validation Error',
        `${character} is not a Simpsons character, please add a Simpsons character.`
      )
    } else {
      const onlyCharacters = rawList
        .filter(character =>
          allCharacters.some(familyMember => familyMember.includes(character))
        )
        .map(filteredCharacter => filteredCharacter)
      setRawList(onlyCharacters.concat(character))
    }
  }

  const handleSubmit = e => {
    if (newItem) {
      e.preventDefault()
      addListItem(newItem)
      Promise.resolve(setNewItem('')).then(
        () => (document.getElementById('add-item-id').value = null)
      )
    }
  }

  return (
    <form className="form">
      <h1>Add a Simpsons Character to the List</h1>
      <div className="flex-row">
        <UserInput
          type="text"
          pattern="[A-Za-z]*"
          inputMode="text"
          newItem={newItem}
          handleInput={handleInput}
          placeholder="Character Name"
          id="add-item-id"
          onChange={handleInput}
        />
        <LargeButton
          text="Add"
          className="large-button"
          onClick={handleSubmit}
        />
      </div>
    </form>
  )
}

export default AddListItem
