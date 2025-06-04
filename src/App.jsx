import { useState } from 'react'
import { ChevronDown, Edit, Trash2 } from 'lucide-react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('fr')
  const [currentView, setCurrentView] = useState('home')
  const [adminMode, setAdminMode] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: { fr: "IA : prothèse ou orthèse ?", en: "AI: prosthesis or orthosis?" },
      content: { 
        fr: "Paru en Mars 2019 dans la Jaune et la Rouge n°743 | Beaucoup d'efforts sont consacrés à la définition de ce qu'est l'intelligence artificielle. Pas de cours sur l'IA qui ne commence par s'y essayer, avec en gros deux voies : une voie empirique, qui consiste à définir l'IA en tant que comportement similaire à l'humain [...]",
        en: "Published in March 2019 in Yellow and Red n°743 | Much effort is devoted to defining what artificial intelligence is. No AI course that doesn't start by trying, with roughly two approaches: an empirical approach, which consists of defining AI as behavior similar to human [...]"
      },
      category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
      date: "09 MARS"
    },
    {
      id: 2,
      title: { fr: "Réaction au rapport Villani", en: "Reaction to the Villani report" },
      content: { 
        fr: "A la lecture du rapport Villani, je ne peux que partager l'analyse parfois sévère d'Olivier Ezratty: « Ce que révèle le Rapport Villani ». Je me contenterai d'ailleurs de n'en effleurer que certains points, ceux où je me sens un peu compétent. Un exemple intéressant d'innovation en IA appliqué à l'industrie Au risque de paraître « ancien combattant », je me souviens [...]",
        en: "Reading the Villani report, I can only share Olivier Ezratty's sometimes severe analysis: \"What the Villani Report reveals\". I will content myself with touching on only certain points, those where I feel somewhat competent. An interesting example of AI innovation applied to industry At the risk of appearing \"old fighter\", I remember [...]"
      },
      category: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
      date: "22 AVR."
    },
    {
      id: 3,
      title: { fr: "La logique « produit » dans le logiciel est loin d'être une évidence", en: "The \"product\" logic in software is far from obvious" },
      content: { 
        fr: "Je constate régulièrement la difficulté de certaines sociétés informatiques à se mettre dans une logique de construction de produits. Cette difficulté vient souvent du fait que les potentiels produits naissent au sein d'entreprises ayant une culture de sociétés de services. Cela vaut que l'on parle de logiciels vendus sur un mode de licences classiques ou par la mise [...]",
        en: "I regularly observe the difficulty of certain IT companies in adopting a product construction logic. This difficulty often comes from the fact that potential products are born within companies with a service company culture. This applies whether we talk about software sold on a mode of classic licenses or by the mise [...]"
      },
      category: { fr: "Marketing", en: "Marketing" },
      date: "24 JUIL."
    }
  ])

  const [newArticle, setNewArticle] = useState({
    title: { fr: '', en: '' },
    content: { fr: '', en: '' },
    category: { fr: '', en: '' }
  })

  const content = {
    fr: {
      nav: {
        approach: "Démarche",
        topics: "Sujets Traités", 
        expertise: "Expertises",
        clients: "Clients",
        about: "A propos",
        blog: "Blog",
        contact: "Contact"
      },
      hero: {
        title: "NovaXone",
        tagline: "Conseil des entreprises technologiques",
        scrollText: "scroll for more"
      },
      about: {
        title: "À propos de NovaXone",
        mission: "La mission de NovaXone est d'accompagner les entreprises technologiques dans les phases clés de leur développement.",
        description: "Novaxone a été fondée par Alain Meller et tire partie de son expérience très variée de trente années dans le développement d'entreprises technologiques et en particulier au sein d'éditeurs de logiciel.\n\nAu cours de sa carrière, il a exercé la plupart des fonctions clés de ce type d'entreprise: R&D, marketing, business développement, direction générale et a également été investisseur dans un fonds de venture capital.\n\nIl en a tiré des convictions et expertises fortes sur les problèmes de développement de ce type d'entreprises.\n\nNovaXone s'appuie fortement sur les expériences acquises par son fondateur."
      },
      blog: {
        title: "Publications",
        subtitle: "Articles, Présentations et plus",
        categories: "Catégories",
        adminMode: "Mode Admin",
        addArticle: "Ajouter un article",
        save: "Sauvegarder",
        cancel: "Annuler"
      }
    },
    en: {
      nav: {
        approach: "What we do",
        topics: "Our focus",
        expertise: "Expertises", 
        clients: "Clients",
        about: "About us",
        blog: "Blog",
        contact: "Contact"
      },
      hero: {
        title: "NovaXone",
        tagline: "The Partner for Growth of Technology Ventures",
        scrollText: "scroll for more"
      },
      about: {
        title: "About NovaXone",
        mission: "NovaXone's mission is to support technology companies in the key phases of their development.",
        description: "Novaxone was founded by Alain Meller and draws on his very varied experience of thirty years in the development of technology companies and in particular within software publishers.\n\nDuring his career, he has exercised most of the key functions of this type of company: R&D, marketing, business development, general management and has also been an investor in a venture capital fund.\n\nHe has drawn strong convictions and expertise on the development problems of this type of company.\n\nNovaXone relies heavily on the experiences acquired by its founder."
      },
      blog: {
        title: "Publications",
        subtitle: "Articles, Presentations and more",
        categories: "Categories",
        adminMode: "Admin Mode",
        addArticle: "Add Article",
        save: "Save",
        cancel: "Cancel"
      }
    }
  }

  const t = content[language]

  const navColors = [
    'bg-blue-500 hover:bg-blue-600',
    'bg-orange-500 hover:bg-orange-600', 
    'bg-purple-500 hover:bg-purple-600',
    'bg-teal-500 hover:bg-teal-600',
    'bg-pink-500 hover:bg-pink-600',
    'bg-indigo-500 hover:bg-indigo-600',
    'bg-red-500 hover:bg-red-600'
  ]

  const navItems = [
    { key: 'approach', label: t.nav.approach },
    { key: 'topics', label: t.nav.topics },
    { key: 'expertise', label: t.nav.expertise },
    { key: 'clients', label: t.nav.clients },
    { key: 'about', label: t.nav.about },
    { key: 'blog', label: t.nav.blog },
    { key: 'contact', label: t.nav.contact }
  ]

  const getCategoryCount = (category) => {
    return articles.filter(article => 
      article.category[language].toLowerCase() === category.toLowerCase()
    ).length
  }

  const categories = [
    { name: { fr: "Articles", en: "Articles" }, count: articles.length },
    { name: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" }, count: getCategoryCount("Intelligence Artificielle") },
    { name: { fr: "Marketing", en: "Marketing" }, count: getCategoryCount("Marketing") }
  ]

  const addArticle = () => {
    if (newArticle.title.fr && newArticle.title.en && newArticle.content.fr && newArticle.content.en) {
      const article = {
        id: articles.length + 1,
        ...newArticle,
        date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }).toUpperCase()
      }
      setArticles([...articles, article])
      setNewArticle({
        title: { fr: '', en: '' },
        content: { fr: '', en: '' },
        category: { fr: '', en: '' }
      })
      setShowAddForm(false)
    }
  }

  const deleteArticle = (id) => {
    setArticles(articles.filter(article => article.id !== id))
  }

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
        {/* Header */}
        <header className="relative z-10 p-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">NovaXone</span>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => item.key === 'blog' ? setCurrentView('blog') : setCurrentView(item.key)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${navColors[index]} relative`}
                >
                  {item.label}
                  <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition-colors relative"
            >
              {language === 'fr' ? 'English' : 'Français'}
              <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                8
              </span>
            </button>
          </div>
        </header>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-yellow-400 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-blue-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-blue-600 transform rotate-45 opacity-60"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-3 bg-blue-400 opacity-50`} style={{height: `${i * 8}px`}}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <div className="absolute top-1/4 left-1/4 text-yellow-400 text-4xl font-bold opacity-60">60%</div>
          <div className="absolute top-1/3 right-1/4 text-blue-300 text-2xl font-bold opacity-70">25%</div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-2xl">
            {t.hero.tagline}
          </p>
          
          <button 
            onClick={() => setCurrentView('about')}
            className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors"
          >
            <span>{t.hero.scrollText}</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </main>
      </div>
    )
  }

  if (currentView === 'about') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
        {/* Header */}
        <header className="relative z-10 p-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">H</span>
              </div>
              <button onClick={() => setCurrentView('home')} className="text-xl font-bold hover:text-blue-300">
                NovaXone
              </button>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => item.key === 'blog' ? setCurrentView('blog') : setCurrentView(item.key)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${navColors[index]} relative`}
                >
                  {item.label}
                  <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition-colors relative"
            >
              {language === 'fr' ? 'English' : 'Français'}
              <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                8
              </span>
            </button>
          </div>
        </header>

        {/* About Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">{t.about.title}</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-xl mb-6 text-blue-200">{t.about.mission}</p>
            <div className="space-y-4 text-gray-300">
              {t.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-8 mt-16">
          <div className="text-gray-400">
            <p>5 Rue Davioud</p>
            <p>75016 Paris</p>
            <p>+33 9 72 33 69 95</p>
            <p className="mt-4">© Novaxone - 2015</p>
          </div>
        </footer>
      </div>
    )
  }

  if (currentView === 'blog') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">H</span>
              </div>
              <button onClick={() => setCurrentView('home')} className="text-xl font-bold text-gray-800 hover:text-blue-600">
                NovaXone
              </button>
            </div>
            
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => item.key === 'blog' ? setCurrentView('blog') : setCurrentView(item.key)}
                  className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${navColors[index]} relative`}
                >
                  {item.label}
                  <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </button>
              ))}
            </nav>

            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition-colors relative"
            >
              {language === 'fr' ? 'English' : 'Français'}
              <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                8
              </span>
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.blog.title}</h1>
            <p className="text-gray-600">{t.blog.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">{t.blog.categories}</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{category.name[language]}</span>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <button
                  onClick={() => setAdminMode(!adminMode)}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                    adminMode ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  {t.blog.adminMode}
                </button>
                
                {adminMode && (
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    + {t.blog.addArticle}
                  </button>
                )}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {showAddForm && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h3 className="font-bold text-gray-800 mb-4">{t.blog.addArticle}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titre (FR)</label>
                      <input
                        type="text"
                        value={newArticle.title.fr}
                        onChange={(e) => setNewArticle({...newArticle, title: {...newArticle.title, fr: e.target.value}})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titre (EN)</label>
                      <input
                        type="text"
                        value={newArticle.title.en}
                        onChange={(e) => setNewArticle({...newArticle, title: {...newArticle.title, en: e.target.value}})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contenu (FR)</label>
                      <textarea
                        value={newArticle.content.fr}
                        onChange={(e) => setNewArticle({...newArticle, content: {...newArticle.content, fr: e.target.value}})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contenu (EN)</label>
                      <textarea
                        value={newArticle.content.en}
                        onChange={(e) => setNewArticle({...newArticle, content: {...newArticle.content, en: e.target.value}})}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie (FR)</label>
                      <input
                        type="text"
                        value={newArticle.category.fr}
                        onChange={(e) => setNewArticle({...newArticle, category: {...newArticle.category, fr: e.target.value}})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie (EN)</label>
                      <input
                        type="text"
                        value={newArticle.category.en}
                        onChange={(e) => setNewArticle({...newArticle, category: {...newArticle.category, en: e.target.value}})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={addArticle}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                      >
                        {t.blog.save}
                      </button>
                      <button
                        onClick={() => setShowAddForm(false)}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                      >
                        {t.blog.cancel}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-sm p-6 relative">
                    {adminMode && (
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="p-2 text-blue-500 hover:bg-blue-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteArticle(article.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.date}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category[language]}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                      {article.title[language]}
                    </h2>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {article.content[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-8 mt-16">
          <div className="text-gray-400">
            <p>5 Rue Davioud</p>
            <p>75016 Paris</p>
            <p>+33 9 72 33 69 95</p>
            <p className="mt-4">© Novaxone - 2015</p>
          </div>
        </footer>
      </div>
    )
  }

  // Default view for other sections
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      {/* Header */}
      <header className="relative z-10 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-bold text-lg">H</span>
            </div>
            <button onClick={() => setCurrentView('home')} className="text-xl font-bold hover:text-blue-300">
              NovaXone
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => item.key === 'blog' ? setCurrentView('blog') : setCurrentView(item.key)}
                className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${navColors[index]} relative`}
              >
                {item.label}
                <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {index + 1}
                </span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-medium transition-colors relative"
          >
            {language === 'fr' ? 'English' : 'Français'}
            <span className="absolute -top-1 -right-1 bg-white text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              8
            </span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 capitalize">{currentView}</h1>
        <p className="text-xl text-blue-200">Cette section est en cours de développement.</p>
        <button 
          onClick={() => setCurrentView('home')}
          className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
        >
          Retour à l'accueil
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 mt-16">
        <div className="text-gray-400">
          <p>5 Rue Davioud</p>
          <p>75016 Paris</p>
          <p>+33 9 72 33 69 95</p>
          <p className="mt-4">© Novaxone - 2015</p>
        </div>
      </footer>
    </div>
  )
}

export default App

