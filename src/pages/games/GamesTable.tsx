import Table from "components/table/Table";
import { columns, filters } from "./constants";
import Button from "components/buttons/Buttons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";

const GamesTable = (): React.ReactElement => {
  const additionalButtons = (
    <Button
      buttonType={buttonTypes.warning}
      onClick={() => {}}
      variant="contained"
    >
      add game
    </Button>
  );

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
        additionalButtons={additionalButtons}
      />
    </>
  );
};

export default GamesTable;
