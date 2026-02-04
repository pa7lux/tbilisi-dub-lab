export interface Resident {
  id: string
  name: string
  image: string
  whoIsHeTitle: string
  whoIsHe: string
  whatHeDoesTitle: string
  whatHeDoes: string
  partnershipTitle: string
  partnership: string
  isGroup: boolean
}

export const useResidents = () => {
  const residents: Resident[] = [
    {
      id: 'martokatsi',
      name: 'Martokatsi',
      image: '/images/residents/martokatsi.jpg',
      whoIsHeTitle: 'residents.whoIsHe',
      whoIsHe: 'Damiane Gordeladze is a Gurian musician and blogger, known in the online space under the name "Martokatsi."',
      whatHeDoesTitle: 'residents.whatHeDoes',
      whatHeDoes: 'He began with Gurian folklore in childhood, then studied Georgian folk music and traditional instruments from different countries. He played in the youth band "LURJI IALKANI" (ლურჯი იალქანი), which combined folk and contemporary genres.\n\nSince 2016, together with his brother, he has been creating the folk ensemble "GORDA" (გორდა), performing concerts in Georgia and abroad, and releasing his first solo album. In the same year, the Gordeladze family ensemble was formed.\n\nIn 2018, he held his first solo performance in Paris (Petit Bain).\n\nSince 2020, he has been developing the blog and brand "Martokatsi", and began composing music for films and commercials, engaging in various collaborations and maintaining active media presence.\n\nSince 2023, he has been working on combining reggae music with folk singing.',
      partnershipTitle: 'residents.partnership',
      partnership: 'Since 2025, he has been a resident of Tbilisi Dub Lab and has started rearranging and performing previously written songs together with the band Nice Rockers.',
      isGroup: false
    },
    {
      id: 'lasha-rukhadze',
      name: 'Lasha Rukhadze',
      image: '/images/residents/lasha.jpg',
      whoIsHeTitle: 'residents.whoIsHe',
      whoIsHe: 'Lasha Rukhadze is a traveling singer-songwriter and street performer from Georgia.',
      whatHeDoesTitle: 'residents.whatHeDoes',
      whatHeDoes: 'His family emigrated to Greece when he was 10 years old. He studied music composition and filmmaking in Athens, then traveled extensively, performing with musicians, bands, and artists in more than 20 countries.\n\nHe is the founder of the reggae–Afro–Balkan band Teeth \'n\' Tongue Jam, a multicultural group with eight members from six different countries, whom he met while busking and traveling as a street performer.\n\nHis debut LP, Share a Vibe, was mixed and mastered by legendary sound engineer Jim Fox at Lionfox Studio in Washington, D.C. He has collaborated with numerous roots reggae and world music artists worldwide and has met and shared stages with legendary acts such as Pablo Moses, Groundation, Twinkle Brothers, and Lee "Scratch" Perry across major European venues.\n\nNow back in his homeland, he is focused on bringing reggae and world music influences to Georgia and strengthening the roots locally.',
      partnershipTitle: 'residents.partnership',
      partnership: 'He met the drummer of Nice Rockers while performing at Liberty Square, and for the past two months has been developing new material with the band, aiming to record an original Georgian roots reggae EP and form one of the strongest live reggae bands in Georgia.',
      isGroup: false
    },
    {
      id: 'nice-rockers',
      name: 'The Nice Rockers',
      image: '/images/residents/nice-rockers.jpg',
      whoIsHeTitle: 'residents.whoAreThey',
      whoIsHe: 'The Nice Rockers are a reggae and dub ensemble formed within Tbilisi Dub Lab as a core backing band for collaborative musical projects.',
      whatHeDoesTitle: 'residents.whatTheyDo',
      whatHeDoes: 'The band serves as a foundational rhythm section for reggae initiatives in Tbilisi. They rehearse regularly, refine classic riddims, and develop tight musical cohesion to be ready for live performances, jam sessions, and experimental collaborations with guest musicians.\n\nTheir current lineup includes drums, bass, guitar, and keys. From the very beginning, the project was designed as an open collaborative platform — a stable musical core around which new formations, projects, and live experiments can emerge.',
      partnershipTitle: 'residents.partnership',
      partnership: 'As the musical backbone of Tbilisi Dub Lab, The Nice Rockers participate in concerts, recording sessions, and residencies with local and international artists. The band provides a reliable live and studio foundation for reggae and dub musicians who engage with the Dub Lab community, helping to cultivate and strengthen the roots reggae scene in Georgia.',
      isGroup: true
    }
  ]

  return {
    residents
  }
}
