import { Admin, Resource, ListGuesser } from "react-admin";

import jsonRest from "ra-data-json-server";
import ListData from "../../components/list";
const data = jsonRest("http://ec2-54-167-32-230.compute-1.amazonaws.com:8080/");

const AdminPage = () => {
    return <Admin dataProvider={data}>
        <Resource name="product" list={ListData} edit={<></>} />
    </Admin>
}

export default AdminPage;