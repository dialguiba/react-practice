import "./App.css";
import State from "./components/State";
import StateTwo from "./components/StateTwo";
import Props from "./components/Props";
import Destrucpropsstate from "./components/DestrucPropsState";
import Destrucpropsstatetwo from "./components/DestrucPropsStateTwo";
import DestrucPropsStateThree from "./components/DestrucPropsStateThree";
import Eventhandling from "./components/EventHandling";
import Eventhandlingtwo from "./components/EventHandlingTwo";
import Eventbind from "./components/EventBind";
import Eventbindtwo from "./components/EventBindTwo";
import Eventbindthree from "./components/EventBindThree";
import Eventbindfour from "./components/EventBindFour";
import Methodsaspropsparent from "./components/MethodsAsPropsParent";

function App() {
  return (
    <>
      <Props />
      <State />
      <StateTwo />
      <Destrucpropsstate name="Matt Murdock" heroName="DareDevil" />
      <Destrucpropsstatetwo name="Matt Murdock" heroName="DareDevil" />
      <DestrucPropsStateThree name="Matt Murdock" heroName="DareDevil" />
      <Eventhandling />
      <Eventhandlingtwo />
      <Eventbind />
      <Eventbindtwo />
      <Eventbindthree />
      <Eventbindfour />
      <Methodsaspropsparent />
    </>
  );
}

export default App;
