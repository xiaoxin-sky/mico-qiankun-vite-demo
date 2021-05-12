import { createApp } from 'vue'
import App from './App.vue'

import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';

registerMicroApps(
  [
    // {
    //   name: 'vue3',
    //   entry: '//localhost:7105',
    //   container: '#subapp-viewport',
    //   activeRule: '/vue3',
    // },
    {
      name: 'vue-test',
      entry: '//localhost:8081',
      container: '#subapp-viewport',
      activeRule: '/vue-test',
    },
    {
      name: 'vite1',
      entry: 'http://192.168.2.188:5000/vite1/',
      container: '#subapp-viewport',
      activeRule: '/',
    },
    // {
    //   name: 'vitechild',
    //   entry: '//localhost:5000',
    //   container: '#subapp-viewport',
    //   activeRule: '/vitechild',
    // }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

setDefaultMountApp('/vue-test');


// 启动 qiankun
start();


runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
createApp(App).mount('#app')
