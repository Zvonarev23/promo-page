export interface SliderHandle {
  scrollLeft: () => void;
  scrollRight: () => void;
}

export interface Slide {
  imageSrc: string;
  title: string;
  description: string;
}