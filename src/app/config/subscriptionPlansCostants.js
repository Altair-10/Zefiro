const planContent = {
    base: [
        { title: "Sito Web", description: "Realizzazione del sito web con layout base" },
        { title: "Hosting Sicuro", description: "Hosting protetto su server europeo" },
        { title: "Dominio Dedicato", description: "Registrazione dominio inclusa per 1 anno" },
        { title: "Certificato SSL", description: "Connessione sicura tramite HTTPS" },
        { title: "Supporto via Mail", description: "Assistenza via email con risposta entro 24h" },
    ],
    overrides: {
        standard: {
            5: { title: "Assistenza Telefonica", description: "Supporto telefonico fino a 2 ore mensili" },
            6: { title: "Backup Mensile", description: "Backup automatico dei contenuti ogni mese" },
            7: { title: "Manutenzione su Richiesta", description: "Interventi tecnici extra su richiesta" },
            8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora", active: false },
            9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca", active: false },
            10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori", active: false },
            11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS", active: false },
        },
        business: {
            5: { title: "Assistenza Telefonica", description: "Supporto telefonico illimitato 24 ore su 24" },
            6: { title: "Backup Settimanale", description: "Backup automatico dei contenuti ogni settimana" },
            7: { title: "Manutenzione Ordinaria", description: "Interventi tecnici ricorrenti inclusi" },
            8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora" },
            9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca", active: false },
            10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori", active: false },
            11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS", active: false },
        },
        premium: {
            5: { title: "Assistenza Telefonica", description: "Supporto telefonico illimitato 24 ore su 24" },
            6: { title: "Backup Giornaliero", description: "Backup automatico dei contenuti ogni giorno" },
            7: { title: "Manutenzione Straordinaria", description: "Interventi tecnici straordinari inclusi" },
            8: { title: "Formazione del Personale", description: "Sessione di formazione della durata di 1 ora" },
            9: { title: "SEO", description: "Ottimizzazione base per i motori di ricerca" },
            10: { title: "Raccolta Dati", description: "Modulo per la raccolta dei dati dei visitatori" },
            11: { title: "Sito Dinamico", description: "Gestione autonoma dei contenuti tramite CMS" },
        }
    }
};


export const getPlanItems = (plan) => {
    const base = [...planContent.base];
    const overrides = planContent.overrides[plan.toLowerCase()] || {};

    const merged = base.map((item, index) => {
        const override = overrides[index];
        return {
            ...item,
            ...(override || {}),
            active: override?.active !== false,
        };
    });

    const extra = Object.entries(overrides)
        .filter(([index]) => parseInt(index) >= base.length)
        .map(([_, value]) => ({
            ...value,
            active: value.active !== false,
        }));

    const allItems = [...merged, ...extra];

    return allItems.sort((a, b) => {
        return (a.active === false ? 1 : 0) - (b.active === false ? 1 : 0);
    });
};