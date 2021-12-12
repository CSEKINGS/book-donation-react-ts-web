import ReactDOM from "react-dom";
import * as Components from "src/app/components";
import * as Formik from "formik";
import * as Yup from "yup";

describe("CheckBox", () => {
  const data = {
    name: "textField",
    label: "TextField",
    type: "text",
    placeholder: "textField placeholder",
  };
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
          {() => (
            <Components.FormField
              name={data.name}
              label={data.label}
              type={data.type}
              placeholder={data.placeholder}
            />
          )}
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
    expect(input?.name).toBe(data.name);
    expect(input?.type).toBe(data.type);
    expect(input?.placeholder).toBe(data.placeholder);
    const label = container.querySelector("label");
    expect(label?.textContent).toBe(data.label);
  });
});
