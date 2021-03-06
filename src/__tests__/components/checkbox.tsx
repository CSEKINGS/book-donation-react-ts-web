import ReactDOM from "react-dom";
import * as Components from "src/app/components";
import * as Formik from "formik";
import * as Yup from "yup";

describe("CheckBox", () => {
  const data = { name: "rememberMe", label: "Remember me?" };
  const validation = Yup.object().shape({
    [data.name]: Yup.boolean().required(`No ${data.name} provided`),
  });
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        <Formik.Formik
          initialValues={{ [data.name]: "" }}
          validationSchema={validation}
          onSubmit={() => {}}
        >
          {() => <Components.CheckBox name={data.name} label={data.label} />}
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
    const input = container.querySelector("input");
    expect(input?.value).toBeFalsy();
    expect(input?.name).toBe(data.name);
    const label = container.querySelector("label");
    expect(label?.textContent).toBe(data.label);
  });
});
