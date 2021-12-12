import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Account Buttons", () => {
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Components.AccountButton />
      </Components.AppProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly", () => {
    const buttons = container.querySelectorAll("a");
    expect(buttons).toHaveLength(2);
    expect(buttons.item(0).textContent).toBe("Join");
    expect(buttons.item(0).href).toBe(`${window.location}account/signup`);
    expect(buttons.item(1).textContent).toBe("Login");
    expect(buttons.item(1).href).toBe(`${window.location}account/signin`);
});
});
