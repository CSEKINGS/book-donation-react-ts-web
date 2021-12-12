import * as Pages from "src/app/pages";
import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Forget Password Pages", () => {
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Pages.Account.Forget.Main />
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
    expect(inputs.item(0).name).toBe("email");
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(1);
    expect(buttons.item(0).type).toBe("submit");
  });
});
