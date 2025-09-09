export interface FilmDetails {
    film_id: number;
    title: string;
    description: string;
    release_year: number;
    language_id: number;
    original_language_id: number | null;
    rental_duration: number;
    rental_rate: string;
    length: number;
    replacement_cost: string;
    rating: string;
    special_features: string; // Note: this is a comma-separated string in the JSON
    last_update: string;
}
