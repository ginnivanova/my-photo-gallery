import { BrowserRouter, Route } from "react-router-dom";
import Dummy from "./Components/dummy";
import NavBar from "./Components/Navegacion/NavBar";
import ImageList from "./Paginas/ImageList";
import LoadFilePage from "./Paginas/LoadFilePage";
import MainPage from "./Paginas/MainPage";
import ResultFilePage from "./Paginas/ResultFilePage";
import Test from "./Paginas/Test";
import { usePageStyles } from "./Styles/PageStyles";

const App = () => {
  const classes = usePageStyles();
  return (
    <BrowserRouter>
      <div className={classes.root_root}>
        <NavBar>
          <Route exact path="/load" component={LoadFilePage} />{" "}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/dummy" component={Dummy} />
          <Route exact path="/result" component={ResultFilePage} />
          <Route exact path="/images" component={ImageList} />
          <Route exact path="/test" component={Test} />
        </NavBar>
      </div>
    </BrowserRouter>
  );
};

export default App;
