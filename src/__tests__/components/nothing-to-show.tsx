import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Nothing to show banner", () => {
  const data = {
    label: "Nothing to show",
  };
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Components.NothigToShow />
      </Components.AppProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly", () => {
    const label = container.querySelector("p");
    expect(label?.textContent).toBe(data.label);
  });
});
