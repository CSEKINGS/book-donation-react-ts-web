import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Faker from "faker";

export const useGetBooksByID = (): {
  book: bookDetail.Type;
} => {
  const { bookId } = Router.useParams();

  return {
    book: {
      id: Faker.random.word(),
      title: Faker.lorem.words(),
      image: Faker.image.animals(),
      description: Faker.lorem.sentence(),
      time: new Date(Faker.date.past()).toLocaleDateString(),
      userName: Faker.name.findName(),
      profile: Faker.image.people(),
      comment: Faker.datatype.boolean(),
      rating: Faker.datatype.number(),
      privacy: Faker.datatype.boolean(),
      author: Faker.name.findName(),
      categeory: Faker.lorem.word(),
      quantity: Faker.datatype.number(),
    },
  };
};

export declare namespace bookDetail {
  export type Type = Pages.Books.Views.bookCard.book & bookDetail.Info;
  export interface Info {
    userName: string;
    profile: string;
    comment: boolean;
    rating: number;
    privacy: boolean;
    author: string;
    categeory: string;
    quantity: number;
  }
}
