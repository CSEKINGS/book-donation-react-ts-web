import ReactDOM from "react-dom";
import * as Components from "src/app/components";
import * as Formik from "formik";

describe("Loading Button", () => {
  const data = { label: "Loading Button" };
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Formik.Formik
          initialValues={{ test: "" }}
          onSubmit={() => {}}
        >
          {() => <Components.LoadingButton>{data.label}</Components.LoadingButton>}
        </Formik.Formik>
      </Components.AppProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly", () => {
    const button = container.querySelector("button");
    expect(button?.textContent).toBe(data.label);
  });
});
