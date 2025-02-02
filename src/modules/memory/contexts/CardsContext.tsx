import { createContext } from "react";
import { ImageResponseMapped } from "../types/ImageResponse.type";

export const CardsContext = createContext<ImageResponseMapped[]>([])