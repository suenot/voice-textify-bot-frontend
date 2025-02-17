import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Voice Textify Bot - Переводчик с голосовых сообщений на текст',
  description: 'Свой движок, без слежки, цена как за стикер. Расшифровывайте голосовые когда нельзя слушать! 100+100 расшифровок в подарок.',
  keywords: 'расшифровка голосовых, конвертер голоса в текст, telegram бот, безопасность, приватность',
}

export { inter }

export default function RootLayout({ children }) {
  return children;
}
