"use client";

import {useTranslations} from 'next-intl';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations();
  const [locale, setLocale] = useState('en');
  const router = useRouter();

  useEffect(() => {
    const currentLocale = window.location.pathname.split('/')[1];
    setLocale(currentLocale);
  }, []);

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    setLocale(newLocale);
    window.location.href = `/${newLocale}`;
  };

  const availableLocales = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'ja', label: '日本語' },
    { code: 'kg', label: 'Кыргызча' },
    { code: 'ko', label: '한국어' },
    { code: 'kz', label: 'Қазақша' },
    { code: 'pt', label: 'Português' },
    { code: 'ru', label: 'Русский' },
    { code: 'uz', label: 'Oʻzbek' },
    { code: 'zh', label: '中文' }
  ];

  const features = [
    {
      title: t('features.privacy.title'),
      content: t('features.privacy.content'),
      emoji: "🔐"
    },
    {
      title: t('features.engine.title'),
      content: t('features.engine.content'),
      emoji: "🛠️"
    },
    {
      title: t('features.gift.title'),
      content: t('features.gift.content'),
      emoji: "✨"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Locale Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="bg-gray-800 text-white p-2 rounded appearance-none bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%23ffffff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')]"
        >
          {availableLocales.map((loc) => (
            <option key={loc.code} value={loc.code}>
              {loc.label}
            </option>
          ))}
        </select>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[60%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex flex-col items-center justify-between p-4 md:p-24 z-10">
        {/* Hero Section */}
        <div className="w-full max-w-7xl text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ lineHeight: "1.3em"}}>
            {t('title')}
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-gray-300">
            {t('subtitle')}
          </p>
          <a
            href="https://t.me/voice_textify_bot?start=50095099"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-lg mb-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('startButton')}
          </a>

          {/* Problem/Solution Block */}
          <div className="w-full max-w-5xl mx-auto mb-24">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-dashed border-red-400/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-200">
                {t('problemTitle')}
              </h2>
              <ul className="space-y-4 text-lg text-gray-300 mb-8">
                <li>{t('problems.meeting')}</li>
                <li>{t('problems.night')}</li>
                <li>{t('problems.library')}</li>
              </ul>
              <p className="text-2xl text-blue-400 font-bold">
                {t('solution')}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-48 mb-24">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.content}</p>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="w-full max-w-7xl mb-24 mt-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">{t('pricing.title')}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Pricing Info */}
              <div className="relative p-10 bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg transform transition-all hover:scale-105 border border-gray-700">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <div className="text-3xl md:text-4xl mb-8 space-y-2 text-white">
                    <div className={`font-bold ${locale === 'ar' ? 'rtl' : ''}`}>{t('pricing.conversionRate')}</div>
                    <div className={`font-bold ${locale === 'ar' ? 'rtl' : ''}`}>{t('pricing.telegramStar')}</div>
                  </div>
                  <p className="text-gray-300 mb-8 text-xl">
                    {t('pricing.description')}
                  </p>
                  <div className="space-y-6 text-left mb-10">
                    <div className="flex items-center transform transition-all hover:translate-x-2">
                      <span className="text-green-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300 text-lg">{t('pricing.bonusEnergy')}</span>
                    </div>
                    <div className="flex items-center transform transition-all hover:translate-x-2">
                      <span className="text-green-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300 text-lg">{t('pricing.balanceTopUp')}</span>
                    </div>
                    <div className="flex items-center transform transition-all hover:translate-x-2">
                      <span className="text-green-400 mr-3 text-xl">✓</span>
                      <span className="text-gray-300 text-lg">{t('pricing.referralProgram')}</span>
                    </div>
                  </div>
                  <a
                    href="https://t.me/voice_textify_bot?start=50095099"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 hover:shadow-lg text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('pricing.tryFree')}
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

          {/* Mobile Chat Visualization */}
          <div className="relative aspect-square max-w-md mx-auto mb-24 lg:hidden">
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

          {/* Footer */}
          <footer className="w-full max-w-7xl text-center text-gray-400 mt-24">
            <p className="mb-4">{t('footer.referral')}<br/>{t('footer.futureFeature')}</p>
            <p>{t('footer.copyright')}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
