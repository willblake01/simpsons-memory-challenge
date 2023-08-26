import React, { useContext, useEffect, useState } from 'react'
import { Context } from './../../../context'
import { SmallButton } from './../../../components/utils'

const List = () => {
  const { rawList, setRawList } = useContext(Context)

  const [list, setList] = useState([])

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

  const deleteListItem = item => {
    const rawListFiltered = rawList.filter(listItem => listItem !== item)
    setRawList(rawListFiltered)
  }

  useEffect(() => {
    const onlyCharacters = rawList
      .filter(character =>
        allCharacters.some(familyMember => familyMember.includes(character))
      )
      .map(filteredCharacter => filteredCharacter)
    setList(onlyCharacters)
  }, [rawList])

  return (
    <section>
      <ol className="list">
        <h2>List</h2>
        {list.map((character, index) => (
          <li key={`${character}-${index}`}>
            {character}
            <SmallButton
              text="Delete"
              onClick={() => deleteListItem(character)}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

export default List
