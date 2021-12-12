import ReactDOM from "react-dom";
import * as Components from "src/app/components";

describe("Landing Detail", () => {
  const data = [
    {
      title: "Landing detail title",
      content: "Some thing very big",
    },
    {
      title: "Landing detail title",
      content: "Some thing very big",
    },
    {
      title: "Landing detail title",
      content: "Some thing very big",
    },
  ];
  let container = document.createElement("div");

  beforeEach(() => {
    document.body.appendChild(container);
    ReactDOM.render(
      <Components.AppProvider>
        {data.map((value, index) => (
          <Components.LandingInfo key={index} index={index} {...value} />
        ))}
      </Components.AppProvider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Render correctly", () => {
    data.forEach((value, index) => {
      const divFound = document.getElementById(value.title);
      const title = divFound?.querySelector("h3");
      expect(title?.textContent).toBe(value.title);
      const content = divFound?.querySelector("p");
      expect(content?.textContent).toBe(value.content);
      const button = divFound?.querySelector("button");
      expect(button?.textContent).toBe("Get started");
    });
  });
});
