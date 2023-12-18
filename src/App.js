import Layout from "../src/Layout/Layout"
import { Route, Routes } from 'react-router-dom';
import AddProjects from "../src/pages/AddProjects"
import AddServices from "../src/pages/AddServices"
import AllServices from "../src/pages/AllServices"
import ClientContacts from "../src/pages/ClientContacts"
import AllProjects from "./pages/AllProjects";
import UpdateProject from "./pages/UpdateProject";
import UpdateServices from "./pages/UpdateServices";
import AddCetificates from "./pages/AddCertificates";

function App() {
  return (
    <div >
      <Layout>
<Routes>
  <Route path = "/" element = {<AllProjects/>} />
  <Route path = "/addproject" element = {<AddProjects/>} />
  <Route path = "/updateproject/:pid" element = {<UpdateProject/>} />
  <Route path = "/addservices" element = {<AddServices/>} />
  <Route path = "/updateservice/:sid" element = {<UpdateServices/>} />
  <Route path = "/allservices" element = {<AllServices/>} />
  <Route path = "/clientresponse" element = {<ClientContacts/>} />
  <Route path = "/addcetificates" element = {<AddCetificates/>} />
</Routes>
      </Layout>
      
    </div>
  );
}

export default App;
