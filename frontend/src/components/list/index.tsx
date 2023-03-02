import { Datagrid, EditButton, List, TextField } from "react-admin"

const ListData = (props: any) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id"/>
        </Datagrid>
    </List>
}

export default ListData;