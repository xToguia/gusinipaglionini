'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function EcoInovaWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustentabilidade",
      description: "Compromisso com o meio ambiente e energia limpa para um futuro melhor."
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Inovação",
      description: "Tecnologia de ponta em soluções solares adaptadas à realidade brasileira."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas do projeto."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Custo-benefício",
      description: "Soluções acessíveis que geram economia real na conta de energia."
    }
  ];

  const team = [
    {
      name: "Maria Silva",
      role: "CEO & Co-fundadora",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Engenheira com 15 anos de experiência em energias renováveis."
    },
    {
      name: "João Santos",
      role: "CTO & Co-fundador",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Especialista em sistemas fotovoltaicos e automação."
    },
    {
      name: "Ana Costa",
      role: "Diretora Comercial",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "MBA em Gestão e 10 anos em desenvolvimento de negócios sustentáveis."
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor de Operações",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "Engenheiro eletricista com foco em eficiência energética."
    }
  ];

  const timeline = [
    { year: "2020", event: "Fundação da EcoInova com foco em residências" },
    { year: "2021", event: "Primeiros 100 projetos instalados" },
    { year: "2022", event: "Expansão para pequenos comércios" },
    { year: "2023", event: "Mais de 500 clientes satisfeitos" },
    { year: "2024", event: "Lançamento de soluções com armazenamento" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sun className={`w-8 h-8 ${scrolled ? 'text-yellow-500' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                EcoInova
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#manifesto" className={`${scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'} transition-colors`}>
                Manifesto
              </a>
              <a href="#historia" className={`${scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'} transition-colors`}>
                Nossa História
              </a>
              <a href="#valores" className={`${scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'} transition-colors`}>
                Valores
              </a>
              <a href="#equipe" className={`${scrolled ? 'text-gray-700 hover:text-yellow-600' : 'text-white hover:text-yellow-300'} transition-colors`}>
                Equipe
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Manifesto */}
      <section id="manifesto" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <div className="mb-8 inline-block">
            <Sun className="w-20 h-20 animate-spin-slow" style={{ animationDuration: '20s' }} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Democratizando o <br />Acesso à Energia Limpa
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">Nossa Missão</p>
          <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Ser líder em soluções de energia solar <br />residencial até 2030
          </h2>
          <p className="text-xl mb-4 font-light">Nossa Visão</p>
          <a href="#contato" className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl mt-8">
            Faça um Orçamento Gratuito
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossa História</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A EcoInova nasceu em 2020 do sonho de dois engenheiros apaixonados por sustentabilidade: 
                tornar a energia solar acessível para todos os brasileiros. Vimos o potencial do nosso país, 
                com sol abundante durante todo o ano, e percebemos que a energia limpa não deveria ser 
                privilégio de poucos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Começamos instalando painéis em residências de vizinhos e amigos. Hoje, já são mais de 
                500 famílias e pequenos negócios economizando dinheiro e contribuindo para um planeta 
                mais sustentável. Cada projeto é uma vitória compartilhada rumo a um futuro mais verde.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop" 
                alt="Painéis Solares"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">500+</p>
                <p className="text-sm">Projetos Instalados</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Linha do Tempo</h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <p className="text-2xl font-bold text-yellow-600 mb-2">{item.year}</p>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os pilares que guiam cada decisão e projeto da EcoInova
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-yellow-100"
              >
                <div className="text-yellow-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <div className="h-1 w-24 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Especialistas dedicados a transformar energia solar em realidade acessível
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 bg-gradient-to-r from-yellow-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Economizar com Energia Solar?
          </h2>
          <p className="text-xl text-white mb-10 opacity-90">
            Faça um orçamento gratuito e descubra quanto você pode economizar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center">
              Solicitar Orçamento
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 inline-flex items-center justify-center">
              Conheça Nossas Soluções
              <Sun className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="w-8 h-8 text-yellow-500" />
                <span className="text-2xl font-bold">EcoInova</span>
              </div>
              <p className="text-gray-400">
                Democratizando o acesso à energia limpa no Brasil
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  contato@ecoinova.com.br
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 98765-4321
                </p>
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  São Paulo, SP
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2 text-gray-400">
                <p><a href="#manifesto" className="hover:text-yellow-500 transition-colors">Manifesto</a></p>
                <p><a href="#historia" className="hover:text-yellow-500 transition-colors">Nossa História</a></p>
                <p><a href="#valores" className="hover:text-yellow-500 transition-colors">Valores</a></p>
                <p><a href="#equipe" className="hover:text-yellow-500 transition-colors">Equipe</a></p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EcoInova Ltda. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}