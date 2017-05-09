<template>
  <div>
    <IAffix @on-change="changeTheme">
      <Menu mode="horizontal" :theme="theme.name" active-name="1" @on-select="getMenu">
        <template v-for="item in menuList">
          <Submenu v-if="item.hasSubMenu" :name="item.name">
            <template slot="title">
              <Icon :type="item.icon"></Icon>
              {{item.title}}
            </template>
            <Menu-item v-for="subMenu in item.subMenu" :name="item.name+'/'+subMenu.name" :key="item.name+'/'+subMenu.name">{{subMenu.title}}</Menu-item>
          </Submenu>
          <Menu-item v-else :name="item.name">
            <Icon type="settings"></Icon>
            {{item.title}}
          </Menu-item>
        </template>
      </Menu>
    </IAffix>

    <div class="layout-breadcrumb" :class="{'margin-top-sticky':!theme.flag}">
      <Breadcrumb>
        <Breadcrumb-item :href="bread.path">{{bread.name}}</Breadcrumb-item>
        <Breadcrumb-item :href="bread.path2">{{bread.name2}}</Breadcrumb-item>
      </Breadcrumb>
    </div>
  </div>
</template>
<script>
  import IAffix from '@/components/UI/IAffix';

  export default {
    components: {
      IAffix
    },
    data() {
      return {
        menuList: [{
          hasSubMenu: false,
          name: '/dashboard',
          icon: 'dashboard',
          title: '控制台'
        }, {
          title: '印钞工序',
          name: '/print',
          icon: 'ios-grid-view',
          hasSubMenu: true,
          subMenu: [{
            title: '概述',
            name: ''
          }, {
            title: '胶凹',
            name: 'oi'
          }, {
            title: '印码',
            name: 'code'
          }, {
            title: '检封',
            name: 'pkg'
          }]
        }, {
          title: '钞纸工序',
          name: '/paper',
          icon: 'navicon'
        }],
        theme: {
          flag: true,
          name: 'light'
        },
        bread: {
          path: '/print',
          name: '印钞工序',
          path2: '/stat',
          name2: '概述'
        }
      }
    },
    methods: {
      changeTheme() {
        this.theme.flag = !this.theme.flag;
        this.theme.name = this.theme.flag ? 'light' : 'dark';
      },
      getMenu(path) {
        this.$router.push(path);
        switch (path) {
          case '/print/':
            this.bread = {
              path: '/print',
              name: '印钞工序',
              path2: path,
              name2: '概述'
            }
            break;
          case '/print/oi':
            this.bread = {
              path: '/print',
              name: '印钞工序',
              path2: path,
              name2: '胶凹'
            }
            break;
          case '/print/code':
            this.bread = {
              path: '/print',
              name: '印钞工序',
              path2: path,
              name2: '印码'
            }
            break;
          case '/print/pkg':
            this.bread = {
              path: '/print',
              name: '印钞工序',
              path2: path,
              name2: '检封'
            }
            break;
          case '/paper':
            this.bread = {
              path,
              name: '钞纸工序',
              path2: '',
              name2: ''
            }
            break;
          case '/dashboard':
            this.bread = {
              path,
              name: '控制台',
              path2: '',
              name2: ''
            }
            break;
        }
      }
    }
  }

</script>

<style scoped lang="less">
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .ivu-menu-light {
    background: rgba(255, 255, 255, 0.7);
  }

  .ivu-menu-dark {
    background: rgba(19, 17, 37, 0.92);
  }

  .ivu-menu {
    display: flex;
    justify-content: center;
  }

  .margin-top-sticky {
    padding-top: 90px;
  }

</style>
