import { FloatButton, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import PlusIcon from './assets/plus.svg?react'
import WordList from './WordList';
import './App.css'

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Space direction='vertical'>
        Welcome to your new world!!
        <WordList />
      </Space>
      <FloatButton onClick={() => navigate('/new-word')} tooltip="Add new Word" icon={<PlusIcon />} />
    </>
  )
}

export default Home;
