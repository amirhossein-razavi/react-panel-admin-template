import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UilUser } from '@iconscout/react-unicons'
import { id } from '../../globaFunctions/panelMenuId'

import styles from './layout.module.css';

const ProtectedRoute = ({ publicReducer, component: Component, ...rest }: any) => {

    const { Content, Sider } = Layout;
    const { SubMenu } = Menu;
    const [menuId, setMenuId] = useState("1");
    const [openKeys, setOpenKeys]: any = useState([]);

    const rootSubmenuKeys = ['sub1'];

    useEffect(() => {
        const panelId: any = id(rest.path);
        setMenuId(panelId[0].toString());
        setOpenKeys(publicReducer.panelCollapsed ? [] : [panelId[1].toString()])
    }, [rest.path]);

    const onOpenChange = keys => {
        const latestOpenKey: any = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Route {...rest} render={(props) => (
            true
                ?
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            right: publicReducer.theme == 'rtl' ? 0 : 'unset',
                            left: publicReducer.theme == 'rtl' ? 'unset' : 0,
                            zIndex: 100,
                            backgroundColor: '#fff'
                        }}
                        className="customSideBar"
                    >
                        <Menu
                            inlineCollapsed={publicReducer.panelCollapsed}
                            openKeys={openKeys}
                            theme="light"
                            onOpenChange={onOpenChange}
                            mode="inline"
                            selectedKeys={[menuId]}
                            className="panelMenu"
                        >
                            <Menu.Item icon={<UilUser className={styles.panelIcon} />} key="3" >dashboard</Menu.Item>
                            {/* <SubMenu key="sub1" icon={<UilWallet className={styles.panelIcon} />} title="کیف پول">
                                <Menu.Item key="1" onClick={() => history.push({ pathname: '/' })}>مشاهده کیف پول</Menu.Item>
                            </SubMenu> */}
                        </Menu>
                    </Sider>
                    <Layout className={["site_layout", styles.site_layout].join(" ")} >
                        <Content className='content'>
                            <Component {...props} />
                        </Content>
                    </Layout>
                </Layout>
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )} />
    );
}

const mapStateToProps = (state: any) => ({
    publicReducer: state.publicReducer,
});

export default connect(mapStateToProps, {})(ProtectedRoute);