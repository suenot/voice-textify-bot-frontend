import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const features = [
    {
      title: "🛡️ Zero слежки",
      content: "Аудио и текст удаляются сразу после обработки. Ваши секреты остаются вашими",
      emoji: "🔐"
    },
    {
      title: "⚙️ Свой движок",
      content: "Не обертка над чужим API — всё кастомное. Никаких сливов данных",
      emoji: "🛠️"
    },
    {
      title: "🎁 100+100 в подарок",
      content: "Начните с бесплатных 100 расшифровок + еще 100 за реферала",
      emoji: "✨"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[60%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 md:p-24 z-10">
        {/* Hero Section */}
        <div className="w-full max-w-7xl text-center mb-24">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ lineHeight: "1.3em"}}>
            @voice_textify_bot
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-gray-300">
            Спасатель от голосовых сообщений
          </p>
          <a
            href="https://t.me/voice_textify_bot?start=50095099"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-lg mb-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Начать использовать
          </a>

          {/* Problem/Solution Block */}
          <div className="w-full max-w-5xl mx-auto mb-24">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dashed border-red-400/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-200">
                Знакомо, когда:
              </h2>
              <ul className="space-y-4 text-lg text-gray-300 mb-8">
                <li>💼 На совещании, а нужно быстро понять содержание длинной голосовухи</li>
                <li>⏰ 3 часа ночи, а голосовуха на 10 минут с сонными претензиями</li>
                <li>🔇 В библиотеке или на встрече, но срочно нужно содержание сообщения</li>
              </ul>
              <p className="text-2xl text-blue-400 font-bold">
                Voice Textify Bot — ваш личный переводчик с «голосовух» на человеческий
              </p>
            </div>
          </div>

          {/* Mobile Chat Visualization */}
          <div className="lg:hidden relative aspect-[4/3] max-w-sm mx-auto mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-2"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                    🎤
                  </div>
                  <div className="flex-1 bg-gray-700/50 p-3 rounded-xl rounded-tl-none">
                    <div className="w-16 h-3 bg-gray-600 rounded animate-pulse"></div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-lg">
                    📝
                  </div>
                  <div className="flex-1 bg-gray-700/50 p-3 rounded-xl rounded-tl-none">
                    <div className="space-y-2">
                      <div className="w-full h-2.5 bg-gray-600 rounded"></div>
                      <div className="w-2/3 h-2.5 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-24">
          {features.map((feature, index) => (
            <div key={index} className="p-8 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform transition-all hover:scale-105 border border-gray-700">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.content}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="w-full max-w-7xl mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Простая и понятная оплата</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Pricing Info */}
            <div className="relative p-10 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform transition-all hover:scale-105 border border-gray-700">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
              
              <div className="relative">
                <div className="text-3xl md:text-4xl mb-8 space-y-2 text-white">
                  <div className="font-bold">1 расшифровка = 0.5 ★</div>
                  <div className="font-bold">1 Telegram Star ≈ 2 ₽</div>
                </div>
                <p className="text-gray-300 mb-8 text-xl">
                  Оплачивайте только то, что используете. Никаких скрытых платежей или подписок.
                </p>
                <div className="space-y-6 text-left mb-10">
                  <div className="flex items-center transform transition-all hover:translate-x-2">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 text-lg">Бонусная энергия для новых пользователей</span>
                  </div>
                  <div className="flex items-center transform transition-all hover:translate-x-2">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 text-lg">Пополнение баланса любой суммой</span>
                  </div>
                  <div className="flex items-center transform transition-all hover:translate-x-2">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300 text-lg">Реферальная программа</span>
                  </div>
                </div>
                <a
                  href="https://t.me/voice_textify_bot?start=50095099"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Попробовать бесплатно
                </a>
              </div>
            </div>

            {/* Right Column - Interactive Illustration */}
            <div className="relative aspect-square max-w-xl mx-auto hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-gray-700">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                      🎤
                    </div>
                    <div className="flex-1 bg-gray-700/50 p-5 rounded-2xl rounded-tl-none">
                      <div className="w-24 h-4 bg-gray-600 rounded animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">
                      📝
                    </div>
                    <div className="flex-1 bg-gray-700/50 p-5 rounded-2xl rounded-tl-none">
                      <div className="space-y-3">
                        <div className="w-full h-4 bg-gray-600 rounded"></div>
                        <div className="w-2/3 h-4 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-7xl text-center text-gray-400">
          <p className="mb-4">P.S. Приведите друга — получите +100 к балансу.<br/>А я добавлю в бота функцию перевода криков в эмодзи… или куплю ему словарь 😅</p>
          <p> 2025 Voice Textify Bot</p>
        </footer>
      </div>
    </main>
  )
}
