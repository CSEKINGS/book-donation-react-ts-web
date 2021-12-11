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

  it("Render correctly initial document", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    const button = container.querySelectorAll("button");
    expect(button).toHaveLength(2);
    const link = container.querySelectorAll("a");
    expect(link).toHaveLength(2);
    inputs[0].value="prakasams22@gmail.com";
    inputs[1].value="$ivakown7";
    button[0].click();
  });

  it("calls onLogin when button clicked", () => {
    const onSubmitMock = jest.fn();
    const inputs = container.querySelectorAll("input");
    inputs[0].value="prakasams22@gmail.com";
    inputs[1].value="$ivakown7";
    const button = container.querySelectorAll("button");
    button[0].click();
    expect(onSubmitMock).toBeCalled()
  });
});
