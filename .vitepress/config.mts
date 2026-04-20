import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Uživatelská příručka",
  description: "Dokumentace a nápověda k ISSŘ",
  
  // Pokud web nahráváte na GitHub Pages do podsložky, odkomentujte řádek níže:
  base: '/dsr_help',

  themeConfig: {
  // PRAVÉ MENU (Osnova aktuální stránky)
    outline: {
      level: 'deep', // Zobrazí všechny úrovně podnadpisů (H2, H3, H4...)
      label: 'Na této stránce' // Počeští nadpis pravého menu (místo "On this page")
    },
	
    // HORNÍ NAVIGACE
    nav: [
      { text: 'Domů', link: '/' },
      { text: 'Příručka', link: '/prirucka/01-Obecná-příručka' } 
    ],

    // LEVÝ PANEL (SIDEBAR)
    sidebar: [
      {
        text: 'Obsah příručky',
        items: [
          // POZOR: link musí přesně odpovídat názvu souboru na disku (bez .md)
          { text: 'Úvodní obrázek', link: '/prirucka/00-sekce' },
          { text: 'Obecná příručka', link: '/prirucka/01-Obecná-příručka' },
          { text: 'Informační systém stavebního řízení', link: '/prirucka/02-Informační-systém-stavebního-řízení' },
          { text: 'Verze dokumentu', link: '/prirucka/03-Verze-dokumentu' },
          { text: 'Použité zkratky', link: '/prirucka/04-Použité-zkratky' },
          { text: '1 Úvod', link: '/prirucka/05-1-Úvod' },
          { text: '2 Přihlášení do ISSŘ a nastavení účtu', link: '/prirucka/06-2-Přihlášení-do-ISSŘ-a-nastavení-uživ' },
          { text: '2.2 Nastavení účtu', link: '/prirucka/07-22-Nastavení-účtu' },
          { text: '3 Základní orientace v ISSŘ', link: '/prirucka/08-3-Základní-orientace-v-ISSŘ' },
          { text: '3.2.6 Úkoly', link: '/prirucka/09-326-Úkoly' },
          { text: '4 Nástěnka', link: '/prirucka/10-4-Nástěnka' },
          { text: '5 Záměry', link: '/prirucka/11-5-Záměry' },
          { text: '6 Řízení', link: '/prirucka/12-6-Řízení' },
          { text: '7 Dokumenty', link: '/prirucka/13-7-Dokumenty' },
          { text: '7.1 Záložky detailu dokumentu', link: '/prirucka/14-71-Záložky-detailu-dokumentu' },
          { text: '7.1.7 Úkoly', link: '/prirucka/15-717-Úkoly' },
          { text: '8 Správní poplatky', link: '/prirucka/16-8-Správní-poplatky' },
          { text: '9 Příjem žádosti a její evidence', link: '/prirucka/17-9-Příjem-žádosti-a-její-evidence' },
          { text: '9.2 Příjem žádosti (datová schránka)', link: '/prirucka/18-92-Příjem-žádosti-prostřednictvím-da' },
          { text: '10 Posouzení příslušnosti', link: '/prirucka/19-10-Posouzení-příslušnosti-postoupení' },
          { text: '11 Přidání účastníků řízení', link: '/prirucka/20-11-Přidání-odesílatele-podatele-účas' },
          { text: '11.2 Účastníci řízení', link: '/prirucka/21-112-Účastníci-řízení' },
          { text: '11.8 Podpora pro udělení výjimky', link: '/prirucka/22-118-Podpora-pro-udělení-výjimky-ověře' },
          { text: '11.10 Hromadné ověření osob', link: '/prirucka/23-1110-Hromadné-ověření-osob-v-řízení' },
          { text: '12 Vytvoření rozdělovníku', link: '/prirucka/24-12-Vytvoření-rozdělovníku' },
          { text: '12.1 Rozdělovník v detailu dokumentu', link: '/prirucka/25-121-Vytvoření-rozdělovníku-v-detailu' },
          { text: '13 Ověření objektů a parcel', link: '/prirucka/26-13-Ověření-ztotožnění-navrhovaných-ob' },
          { text: '14 Vyjádření a závazná stanoviska', link: '/prirucka/27-14-Vyjádření-a-závazná-stanoviska-do' },
          { text: '15 Tvorba vlastního dokumentu', link: '/prirucka/28-15-Tvorba-vlastního-dokumentu' },
          { text: '16 Přerušení řízení', link: '/prirucka/29-16-Přerušení-řízení' },
          { text: '17 Vyznačení nabytí právní moci', link: '/prirucka/30-17-Vyznačení-nabytí-právní-moci' },
          { text: '17.2 Automatický proces právní moci', link: '/prirucka/31-172-Automatický-proces-vyznačení-nab' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})