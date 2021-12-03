import * as ChartType from "chart.js";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as React from "react";
import * as Faker from "faker";

export const useGetChart = (): {
  chart: ChartType.ChartData<"doughnut", number[], unknown>;
  loading: boolean;
} => {
  const { user } = React.useContext(Hooks.Search);
  const { data, isFetching } = Api.Server.useRequest(
    ["chart", user._id],
    "dashboard"
  );
  return {
    chart: {
      labels: ["Books", "Users", "Transactions", "Notifications"],
      datasets: [
        {
          label: "# of Votes",
          data: data && Object.values(data),
          backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(255, 206, 86)",
            "rgba(75, 192, 192)",
          ],
        },
      ],
    },
    loading: isFetching,
  };
};
