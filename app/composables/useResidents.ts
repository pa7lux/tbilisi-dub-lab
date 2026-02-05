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
  const { t } = useI18n()
  
  const residents: Resident[] = [
    {
      id: 'martokatsi',
      name: t('residentsData.martokatsi.name'),
      image: '/images/residents/martokatsi.jpg',
      whoIsHeTitle: 'residents.whoIsHe',
      whoIsHe: t('residentsData.martokatsi.whoIsHe'),
      whatHeDoesTitle: 'residents.whatHeDoes',
      whatHeDoes: t('residentsData.martokatsi.whatHeDoes'),
      partnershipTitle: 'residents.partnership',
      partnership: t('residentsData.martokatsi.partnership'),
      isGroup: false
    },
    {
      id: 'lasha-rukhadze',
      name: t('residentsData.lashaRukhadze.name'),
      image: '/images/residents/lasha.jpg',
      whoIsHeTitle: 'residents.whoIsHe',
      whoIsHe: t('residentsData.lashaRukhadze.whoIsHe'),
      whatHeDoesTitle: 'residents.whatHeDoes',
      whatHeDoes: t('residentsData.lashaRukhadze.whatHeDoes'),
      partnershipTitle: 'residents.partnership',
      partnership: t('residentsData.lashaRukhadze.partnership'),
      isGroup: false
    },
    {
      id: 'nice-rockers',
      name: t('residentsData.niceRockers.name'),
      image: '/images/residents/nice-rockers.jpg',
      whoIsHeTitle: 'residents.whoAreThey',
      whoIsHe: t('residentsData.niceRockers.whoAreThey'),
      whatHeDoesTitle: 'residents.whatTheyDo',
      whatHeDoes: t('residentsData.niceRockers.whatTheyDo'),
      partnershipTitle: 'residents.partnership',
      partnership: t('residentsData.niceRockers.partnership'),
      isGroup: true
    }
  ]

  return {
    residents
  }
}
