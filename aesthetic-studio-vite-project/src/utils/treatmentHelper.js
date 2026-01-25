import data from '../data/content.json';

export const getTreatment = (slug) => {
    // Pobieram wszystkie kategorie z JSONa (body, face, vascular itd.)
    const categories = Object.values(data.treatments);

    // Szukam zabiegu o podanym kluczu (slug) w każdej kategorii
    for (const category of categories) {
        if (category[slug]) {
            return category[slug];
        }
    }

    console.error(`Nie znaleziono zabiegu o kluczu: ${slug}`);
    return null;
};