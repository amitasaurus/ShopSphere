export interface SanityImage {
  _type: string;
  asset: ImageAsset;
  caption?: string;
  attribution?: string;
  crop: Crop;
  hotspot: Hotspot;
}

interface ImageAsset {
  _type: string;
  _ref: string;
}

interface Crop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

interface Hotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}
