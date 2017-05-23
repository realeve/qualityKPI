<template>
  <div>
    <IAffix @on-change="changeTheme">
      <Menu mode="horizontal" :theme="theme.name" :active-name="activeName" @on-select="getMenu">
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
  import util from '../../config/common';

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
        }
      }
    },
    computed:{
      bread:{
        get(){
          return this.$store.state.bread;
        },
        set(val){
          this.$store.commit('setBread',val);
        }
      },
      activeName(){
        return this.$store.state.activeName;
      }
    },
    methods: {
      changeTheme() {
        this.theme.flag = !this.theme.flag;
        this.theme.name = this.theme.flag ? 'light' : 'dark';
      },
      getMenu(path) {
        this.$router.push(path);
        this.bread = util.getBread(path);
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
    background: rgba(36,36,62,.9); //rgba(19, 17, 37, 0.92);    
  }
  .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-submenu {
    color:#ccc;
  }
  
  .ivu-menu {
    display: flex;
    justify-content: center;
  }

  .margin-top-sticky {
    padding-top: 90px;
  }

</style>
