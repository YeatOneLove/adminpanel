export interface IDrawer {
    open: boolean;
    children: React.ReactElement;
    header?: string;
    loading?: boolean;
    handleClose: () => void;
    onSave: () => void;
}