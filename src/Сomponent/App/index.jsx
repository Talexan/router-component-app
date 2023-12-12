import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Button, Flex } from "antd";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header__menu">
        <nav>
          <Flex wrap="wrap" gap="small" justify="space-between" align="center">
            <div>
              <Flex
                wrap="wrap"
                gap={10}
                justify="flex-start"
                className="site-button-ghost-wrapper"
                align="flex-start"
              >
                <h3 className="menu__title">
                  Implementation react router components
                </h3>
              </Flex>
            </div>
            <div>
              <Flex
                wrap="wrap"
                gap={10}
                className="site-button-ghost-wrapper"
                justify="flex-end"
              >
                <Link to="/sportek">
                  <Button ghost>Sportek</Button>
                </Link>
                <Link to="/motovelorezina">
                  <Button ghost>Motovelorezina</Button>
                </Link>
                <Link to="/webcademy">
                  <Button ghost>Webcademy</Button>
                </Link>
              </Flex>
            </div>
          </Flex>
        </nav>
      </div>
      <div>
        <Routes>
          <Route
            path="/sportek"
            element={
              <div>
                <frameset>
                  <frame
                    title="sportek"
                    name="sportek"
                    className="main__frame"
                    src="https://www.sportek.in.ua/blogs/stati/razmery-velosipednykh-pokryshek"
                  ></frame>
                </frameset>
              </div>
            }
          ></Route>
          <Route
            path="/motovelorezina"
            element={
              <div>
                <frameset>
                  <frame
                    title="motovelorezina"
                    name="motovelorezina"
                    className="main__frame"
                    src="https://motovelorezina.com.ua/velopokryshka-bez-kamery-obychnaya-20-3299.html?gclid=CjwKCAjwzo2mBhAUEiwAf7wjkqymE5YKDimYa6RPPm1VNw56N2GgD03YkPGqBjGeGq1IoiRmrX2pKhoCxTgQAvD_BwE"
                  ></frame>
                </frameset>
              </div>
            }
          ></Route>
          <Route
            path="/webcademy"
            element={
              <div>
                <frameset>
                  <frame
                    title="webcademy"
                    name="webcademy"
                    className="main__frame"
                    src="https://webcademy.ru/blog/888/"
                  ></frame>
                </frameset>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
