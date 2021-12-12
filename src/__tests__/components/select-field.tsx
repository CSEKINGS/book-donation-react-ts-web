import ReactDOM from "react-dom";
import * as Mui from "@mui/material";
import * as Components from "src/app/components";

describe("SelctField", () => {
  const data = { label: "SelectField", values: ["item 1", "item 2", "item 3"] };
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Components.SelectField label={data.label}>
          {data.values?.map((value, index) => (
            <Mui.MenuItem key={index} value={index}>{value}</Mui.MenuItem>
          ))}
        </Components.SelectField>
      </Components.AppProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(1);
    const label = container.querySelector("label");
    expect(label?.textContent).toBe(data.label);
  });
});
