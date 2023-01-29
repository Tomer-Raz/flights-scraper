import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { NotFound } from './NotFound'
import App from './App'
import { LayoutSider } from './LayoutSider'

export const MainLayout = () => {
  return (
        <Layout>
            <LayoutSider/>
            <Content>
            </Content>
        </Layout>
  )
}
