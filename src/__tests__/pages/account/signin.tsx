import * as Pages from "src/app/pages";
import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Login Pages", () => {
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Pages.Account.SignIn.Main />
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
    expect(inputs.item(0).name).toBe("email");
    expect(inputs.item(1).name).toBe("password");
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(2);
    expect(buttons.item(0).childNodes.item(0)).toHaveProperty(
      "dataset.testid",
      "VisibilityIcon"
    );
    expect(buttons.item(1).type).toBe("submit");
    const links = container.querySelectorAll("a");
    expect(links.item(0).textContent).toBe("Forget password?");
    expect(links.item(1).textContent).toBe("Create an Account");
    expect(links).toHaveLength(2);
  });
});
