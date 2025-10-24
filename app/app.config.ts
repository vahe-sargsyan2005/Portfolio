export default defineAppConfig({
  global: {
    picture: {
      src: '/avatar.jpg',
      alt: 'Vahe — Full Stack Developer'
    },
    email: 'w33bv.gl@gmail.com',
    phone: '+374(94) 161-331',
    address: 'Armenia, Ararat Vedi.vosketap i.hakobyan 28',
    telegram: '@Vahesargsyan2005',
    available: true,
    birthday: '2005-03-30',
    experienceStartDate: '2022-01-01'
  },
  ui: {
    colors: {
      primary: 'red',
      neutral: 'neutral'
    },
    card: {
      slots: {
        header: 'p-2 sm:px-4',
        body: 'p-2 sm:p-4',
        footer: 'p-2 sm:px-4'
      },
      variants: {
        variant: {
          subtle: {
            root: 'bg-elevated/50 ring ring-default divide-y divide-default'
          }
        }
      },
      defaultVariants: {
        variant: 'subtle'
      }
    }
  },
  footer: {
    credits: `Copyright © 2024 - ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/vahe-sargsyan2005',
        'target': '_blank',
        'aria-label': 'Vahe on GitHub'
      },
      {
        'icon': 'i-simple-icons-telegram',
        'to': 'https://t.me/Vahesargsyan2005',
        'target': '_blank',
        'aria-label': 'Vahe on Telegram'
      },
      {
        'icon': 'i-simple-icons-facebook',
        'to': 'https://facebook.com/profile.php?id=61551120939139',
        'target': '_blank',
        'aria-label': 'Vahe on Facebook'
      },
      {
        'icon': 'i-simple-icons-maildotru',
        'to': 'mailto:w33bv.gl@gmail.com',
        'target': '_blank',
        'aria-label': 'Send email to Vahe'
      },
      {
        'icon': 'i-simple-icons-npm',
        'to': 'https://www.npmjs.com/~vahesargsyan',
        'target': '_blank',
        'aria-label': 'Vahe on NPM'
      },
      {
        'icon': 'i-simple-icons-modrinth',
        'to': 'https://modrinth.com/user/VaheSargsyan',
        'target': '_blank',
        'aria-label': 'Vahe on Modrinth'
      }
    ]
  }
})
