import * as Faker from "faker";

export const useGetDashboard = (): Banner.Props[] => {
  return new Array(3).fill(undefined).map(() => ({
    title: Faker.lorem.word(),
    image: Faker.image.animals(),
    content: Faker.lorem.words(),
  }));
};

export declare namespace Banner {
  export interface Props {
    image: string;
    title: string;
    content: string;
  }
}
