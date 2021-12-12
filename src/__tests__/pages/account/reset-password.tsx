import * as Pages from "src/app/pages";
import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Reset Password Pages", () => {
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Pages.Account.Reset.Main />
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
    expect(inputs).toHaveLength(2);
    expect(inputs.item(0).name).toBe("password");
    expect(inputs.item(1).name).toBe("confirmPassword");
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(3);
    expect(buttons.item(0).childNodes.item(0)).toHaveProperty(
      "dataset.testid",
      "VisibilityIcon"
    );
    expect(buttons.item(1).childNodes.item(0)).toHaveProperty(
      "dataset.testid",
      "VisibilityIcon"
    );
    expect(buttons.item(2).type).toBe("submit");
  });
});
