export interface Supplication {
  id: number;
  source: string;
  arabicText: string | string[];
  englishMeaning: string | string[];
  dutchMeaning: string | string[];
  dutchPhonetic: string;
  audioUrl: string;
}

export interface AudioPlayerProps {
  audioUrl: string;
  supplicationId: number;
}

export interface ArabicTextProps {
  text: string | string[];
  fontSize?: number;
}

export interface SupplicationCardProps {
  data: Supplication;
}
