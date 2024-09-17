import { Button, Space, Table } from "antd";
import type { TableProps } from 'antd';

interface DataType {
  key: number;
  word: string;
  eng: string;
  rus: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Word',
    dataIndex: 'word',
    key: 'word',
  },
  {
    title: 'English',
    dataIndex: 'eng',
    key: 'eng',
  },
  {
    title: 'Russian',
    dataIndex: 'rus',
    key: 'rus',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button danger type="dashed">Delete {record.word}</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: 1,
    word: 'Welkommen',
    eng: 'Welcome',
    rus: 'Добро пожаловать'
  },
  {
    key: 2,
    word: 'Hallo',
    eng: 'Hello',
    rus: 'Здравствуйте'
  },
  {
    key: 3,
    word: 'Tschuss',
    eng: 'Bye',
    rus: 'Пока'
  },
];

function WordList() {

  return <Table columns={columns} dataSource={data} pagination={{ hideOnSinglePage: true }} />
}

export default WordList;
