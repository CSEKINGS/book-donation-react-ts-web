import * as Pages from "src/app/pages";
import * as Faker from "faker";

export const useGetBooks = (): Pages.Books.Views.bookCard.book[] => {
  return new Array(20).fill(undefined).map(() => ({
    id: Faker.random.word(),
    title: Faker.lorem.words(),
    image: Faker.image.animals(),
    description: Faker.lorem.sentence(),
    time: new Date(Faker.date.past()).toLocaleDateString(),
    author: Faker.name.findName(),
    categeory: Faker.lorem.word(),
  }));
};
