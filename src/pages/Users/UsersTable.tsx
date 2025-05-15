import Table from "components/table/Table";
import React from "react"
import { columns, filters } from "./constants";

const UsersTable = (): React.ReactElement => {
    return (
        <>
            <Table
                columns={columns}
                rows={[]}
                pageData={{
                    page: 0,
                    limit: 10,
                    totalCount: 0,
                }}
                filters={filters}
                showSearch={true}
                showSearchDrawer={true}
                fetchData={() => {}}
                
            />
        </>
)
};

export default UsersTable;