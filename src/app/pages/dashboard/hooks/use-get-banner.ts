import * as Faker from "faker";
import * as Assets from "src/assets";

export const useGetDashboard = (): Banner.Props[] => {
  return [
    {
      title: "Share",
      image: Assets.landingImages.cardImg1,
      content: "Share your old books to somebody",
    },
    {
      title: "Help",
      image: Assets.landingImages.cardImg2,
      content: "Help to books required people",
    },
    {
      title: "Helpful",
      image: Assets.landingImages.cardImg3,
      content: "It's tigger somebody's career and life",
    },
  ];
};

export declare namespace Banner {
  export interface Props {
    image: string;
    title: string;
    content: string;
  }
}
