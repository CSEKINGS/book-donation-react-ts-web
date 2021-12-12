import * as Pages from "src/app/pages";
import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Register Pages", () => {
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Pages.Account.SignUp.Main />
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
    expect(inputs).toHaveLength(8);
    expect(inputs.item(0).name).toBe("name");
    expect(inputs.item(1).name).toBe("mobileNo");
    expect(inputs.item(2).name).toBe("profile");
    expect(inputs.item(3).name).toBe("email");
    expect(inputs.item(4).name).toBe("about");
    expect(inputs.item(5).name).toBe("address");
    expect(inputs.item(6).name).toBe("password");
    expect(inputs.item(7).name).toBe("confirmPassword");
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
    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(1);
    expect(links.item(0).textContent).toBe("Sign In");
  });
});
