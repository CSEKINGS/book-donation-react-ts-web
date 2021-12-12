import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("CheckBox", () => {
  const data = { name: "rememberMe", label: "Remember me?" };
  let container = document.createElement("div");

  // beforeEach(() => {
  //   document.body.appendChild(container);
  //   ReactDOM.render(
  //     <Components.AppProvider>
  //       <Components.CheckBox name={data.name} label={data.label} />
  //     </Components.AppProvider>,
  //     container
  //   );
  // });

  // afterEach(() => {
  //   document.body.removeChild(container);
  //   container.remove();
  // });

  // it("Render correctly", () => {
  //   const input = container.querySelector("input");
  //   expect(input).toHaveLength(1);
  //   expect(input?.value).toBeFalsy();
  //   expect(input?.name).toBe(data.name);
  //   const label = container.querySelector("label");
  //   expect(label?.textContent).toBe(data.label);
  // });
});
