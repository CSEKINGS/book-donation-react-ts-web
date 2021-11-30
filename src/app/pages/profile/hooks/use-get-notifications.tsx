import * as Pages from "src/app/pages";
import * as Faker from "faker";

export const useGetNotifications =
  (): Pages.Profile.Views.notification.Props[] => {
    return new Array(8).fill(undefined).map(() => ({
      uid: Faker.lorem.word(),
      profile: Faker.image.animals(),
      name: Faker.name.findName(),
      message: Faker.lorem.sentence(),
      time: new Date(Faker.date.past()).toLocaleDateString(),
    }));
  };
