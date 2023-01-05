import './Grid.css';
interface columnI {
    title: string;
    dataIndex: string;
    key: string;
    width?: number;
    align?: string;
    fixed?: string;
}
interface gridI {
    columns: columnI[];
    dataSource: any;
    fixedHeader?: boolean;
}
declare const Grid: ({ columns, dataSource, fixedHeader }: gridI) => JSX.Element;
export default Grid;
