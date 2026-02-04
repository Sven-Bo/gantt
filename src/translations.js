// UI translations for SimpleGantt
// Date/month names are handled by Intl.DateTimeFormat in date_utils.js

const translations = {
    en: {
        today: 'Today',
        mode: 'Mode',
        progress: 'Progress',
        days: 'days',
        hours: 'hours',
        excluded: 'excluded',
    },
    de: {
        today: 'Heute',
        mode: 'Ansicht',
        progress: 'Fortschritt',
        days: 'Tage',
        hours: 'Stunden',
        excluded: 'ausgeschlossen',
    },
    fr: {
        today: "Aujourd'hui",
        mode: 'Mode',
        progress: 'Progression',
        days: 'jours',
        hours: 'heures',
        excluded: 'exclu',
    },
    es: {
        today: 'Hoy',
        mode: 'Modo',
        progress: 'Progreso',
        days: 'días',
        hours: 'horas',
        excluded: 'excluido',
    },
    it: {
        today: 'Oggi',
        mode: 'Modalità',
        progress: 'Progresso',
        days: 'giorni',
        hours: 'ore',
        excluded: 'escluso',
    },
    pt_br: {
        today: 'Hoje',
        mode: 'Modo',
        progress: 'Progresso',
        days: 'dias',
        hours: 'horas',
        excluded: 'excluído',
    },
    nl: {
        today: 'Vandaag',
        mode: 'Modus',
        progress: 'Voortgang',
        days: 'dagen',
        hours: 'uren',
        excluded: 'uitgesloten',
    },
    ru: {
        today: 'Сегодня',
        mode: 'Режим',
        progress: 'Прогресс',
        days: 'дней',
        hours: 'часов',
        excluded: 'исключено',
    },
    pl: {
        today: 'Dziś',
        mode: 'Tryb',
        progress: 'Postęp',
        days: 'dni',
        hours: 'godzin',
        excluded: 'wykluczone',
    },
    tr: {
        today: 'Bugün',
        mode: 'Mod',
        progress: 'İlerleme',
        days: 'gün',
        hours: 'saat',
        excluded: 'hariç',
    },
    zh: {
        today: '今天',
        mode: '模式',
        progress: '进度',
        days: '天',
        hours: '小时',
        excluded: '已排除',
    },
    ko: {
        today: '오늘',
        mode: '모드',
        progress: '진행률',
        days: '일',
        hours: '시간',
        excluded: '제외됨',
    },
    hi: {
        today: 'आज',
        mode: 'मोड',
        progress: 'प्रगति',
        days: 'दिन',
        hours: 'घंटे',
        excluded: 'बहिष्कृत',
    },
    fa: {
        today: 'امروز',
        mode: 'حالت',
        progress: 'پیشرفت',
        days: 'روز',
        hours: 'ساعت',
        excluded: 'مستثنی',
    },
};

export function t(key, lang = 'en') {
    // Handle language codes like 'pt_br' or 'pt-BR'
    const normalizedLang = lang.toLowerCase().replace('-', '_');
    
    // Try exact match first, then base language (e.g., 'pt' from 'pt_br')
    const dict = translations[normalizedLang] || 
                 translations[normalizedLang.split('_')[0]] || 
                 translations.en;
    
    return dict[key] || translations.en[key] || key;
}

export default translations;
