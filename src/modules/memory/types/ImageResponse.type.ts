
export type ImageResponse = {
    fields: {
      image: {
        uuid: string;
        url: string;
      };
    };
}


export type ImageResponseMapped = {
    uuid: string;
    url: string;
    status: string,
    index: number,
}