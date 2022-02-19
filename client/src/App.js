import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

//Pages
import Home from "./views/Home/Home";
//-
import Sell from "./views/Sell/Sell";
import SellToWebsite from "./views/Sell/SellToWebsite";
//-
import Give from "./views/Give/Give";
import GiveToAsso from "./views/Give/GiveToAsso";
//-
import Discard from "./views/Discard/Discard";
import DiscardToTrash from "./views/Discard/DiscardToTrash";
import DiscardToDump from "./views/Discard/DiscardToDump";
//-
import Contact from "./views/Contact/Contact";
import ContactRedirect from "./views/Contact/ContactRedirect";
//-
import Error404 from "./views/Error404";


const App = ({hideLoader}) => {
    useEffect(() => hideLoader(), [hideLoader]);

    return (
        <Router>
            <Switch>
                <Route path="/home"                        element={<Home />            }/>
                <Route path="/vendre"                      element={<Sell />            }/>
                <Route path="/vendre/resultats"            element={<SellToWebsite />   }/>
                <Route path="/donner"                      element={<Give />            }/>
                <Route path="/donner/resultats"            element={<GiveToAsso />      }/>
                <Route path="/jeter"                       element={<Discard />         }/>
                <Route path="/jeter/poubelles-ecologiques" element={<DiscardToTrash />  }/>
                <Route path="/jeter/decharge"              element={<DiscardToDump />   }/>
                <Route path="/contact"                     element={<Contact />         }/>
                <Route path="/contact/redirect"            element={<ContactRedirect /> }/>
                <Route path="*"                            element={<Error404 />        }/>
            </Switch>
        </Router>
    )
}

export default App;