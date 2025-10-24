import en from './locales/en-US.json'
import ru from './locales/ru-RU.json'
import hy from './locales/hy-AM.json'
import uk from './locales/uk-UA.json'

export default defineI18nConfig(() => ({
  messages: {
    en,
    ru,
    hy,
    uk
  }
}))
