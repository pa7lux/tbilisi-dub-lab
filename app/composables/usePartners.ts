export interface Partner {
  id: string
  name: string
  logo: string
  instagram: string
}

export const usePartners = () => {
  const partners: Partner[] = [
    {
      id: 'irie-roots',
      name: 'Irie Roots Soundsystem',
      logo: '/images/partners/irie-roots.svg',
      instagram: 'https://www.instagram.com/irie_roots_sound/'
    },
    {
      id: 'revolution-art-space',
      name: 'Revolution Art Space',
      logo: '/images/partners/R-bricked.svg',
      instagram: 'https://www.instagram.com/revolution_tbi/'
    }
  ]

  return {
    partners
  }
}
