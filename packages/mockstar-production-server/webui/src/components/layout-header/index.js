import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import { getSiteBase, getSiteRoot } from '../../custom';

import './index.less';

class LayoutHeader extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeMenu: '',
            isInit: false
        };
    }

    handleIsActive = (curMenu) => {
        if (!curMenu) {
            return;
        }
        // console.log('---handleIsActive---', curMenu);

        const map = {
            [`${getSiteBase()}/server`]: 'server',
            [`${getSiteBase()}/dashboard`]: 'home',
            [`${getSiteBase()}/mockers`]: 'mockers'
        };

        let newMenuId = map[curMenu.url];

        if (newMenuId && newMenuId !== this.state.activeMenu) {
            setTimeout(() => {
                this.setState({
                    activeMenu: newMenuId,
                    isInit: true
                });
            }, 0);
        }
    };

    render() {
        let { activeMenu } = this.state;

        return (
            <Layout.Header className="layout-header header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[activeMenu]}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="server">
                        <NavLink to={`${getSiteBase()}/server`} isActive={this.handleIsActive}>首页</NavLink>
                    </Menu.Item>

                    <Menu.Item key="mockers">
                        <NavLink to={`${getSiteBase()}/mockers`} isActive={this.handleIsActive}>数据模拟</NavLink>
                    </Menu.Item>

                </Menu>
            </Layout.Header>
        );
    }
}

export default LayoutHeader;