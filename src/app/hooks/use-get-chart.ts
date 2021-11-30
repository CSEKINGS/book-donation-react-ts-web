import * as ChartType from "chart.js";
import * as Faker from "faker";

export const useGetChart = (): ChartType.ChartData<
  "doughnut",
  number[],
  unknown
> => {
  return {
    labels: ["Books", "Users", "Transactions", "Notifications"],
    datasets: [
      {
        label: "# of Votes",
        data: new Array(4).fill(undefined).map(() => Faker.random.number()),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
        ],
      },
    ],
  };
};
